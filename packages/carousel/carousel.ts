import { Inline, Event } from '@tlgr/component';
import { Inline as Button, types } from '@tlgr/button';
import { InlineKeyboardButton, Update } from 'telegraf/typings/core/types/typegram';
import { Context, Telegraf } from 'telegraf';

import ArrayIterator from './iterator';

type Control = {
  symbol?: string;
  alert?: types.AlertOptions;
};

export type Options = {
  // TODO: add voice support
  readonly type: 'photo' | 'audio' | 'animation' | 'video' | 'document' | 'message';
  /**
   * Reply mode.
   * 
   * `new` - sends new message.
   * 
   * `edit` - edit first sended message
   * 
   * @default 'edit'
   *
   */
  readonly mode?: 'edit' | 'new';
  /**
   * Start over again and show `next` or `prev` control in case of end of items
   *
   * @default false
   */
  readonly loop?: boolean;
  /**
   * Media to be sended.
   *
   * @type {string[]}
   */
  readonly items: CarouselItem[];
  /**
   * Start index.
   * @default 0
   *
   * @type {number}
   */
  readonly startFrom?: number;
  controls?: {
    /**
     * Previous Item control.
     * 
     * @default '<'
     *
     * @type {Control}
     */
    prev?: Control;
    /**
     * Next Item control.
     * 
     * @default '>'
     * @type {Control}
     */
    next?: Control;
  }
};
type Next = Event<'next', [ctx: Context<Update>, instance: Carousel]>;
type Prev = Event<'prev', [ctx: Context<Update>, instance: Carousel]>;
type Sent = Event<'sent', [ctx: Context<Update>]>;

/** 
 * Carousel Item type
 * 
 * Can be a string - source to the media. E.g. `https://google.com/path/to/cat/image`
 * 
 * 
 */
export type CarouselItem = string | {
  source: string | NodeJS.ReadableStream;
  url: string;
  filename?: string;
};

export default class Carousel extends Inline<[Next, Prev, Sent]> {
  #prevButton = new Button(this.bot, this.options?.controls?.prev?.symbol ?? '<', { alert: this.options?.controls?.prev?.alert, prefix: '@tlgr/caroousel/prev' });
  #nextButton = new Button(this.bot, this.options?.controls?.next?.symbol ?? '>', { alert: this.options?.controls?.next?.alert, prefix: '@tlgr/caroousel/next' });
  #iterator = new ArrayIterator(this.options.items, { loop: this.options.loop, startIndex: this.options.startFrom });
  #mode = this.options.mode ?? 'edit';
  #actionFunction = `send${capitalize(this.options.type)}` as const;
  /**
   * Get current rendered item
   *
   * @readonly
   * @memberof Carousel
   */
  get item() {
    return this.#iterator.current;
  }
  get index() {
    return this.#iterator.index;
  }
  /** Carousel length */
  readonly length = this.#iterator.length;
  #messageId: number | undefined;
  #nextGenerator = this.#iterator.nextGenerator()
  #prevGenerator = this.#iterator.prevGenerator();
  constructor(readonly bot: Telegraf, readonly options: Options) {
    super(bot);
    this.#nextButton.on('click', async (ctx, button) => {
      // get next item for this.item
      this.#nextGenerator.next();
      await this.performAction(ctx);
      this.emit(new Event('next', ctx, this));
    });
    this.#prevButton.on('click', async (ctx) => {
      // prev item
      this.#prevGenerator.next();
      await this.performAction(ctx);
      this.emit(new Event('prev', ctx, this));
    });
  }

  async send(context: Context<Update>) {
    await this.performAction(context, true);
    this.emit(new Event('sent', context));
  }

  render(): InlineKeyboardButton[][] {
    return [[
      this.#prevButton.render(),
      this.#nextButton.render(),
    ]];
  }

  private async performAction(ctx: Context<Update>, send: boolean = false) {
    if (send || this.#mode === 'new') {
      if (this.#actionFunction === 'sendMessage' && typeof this.item === 'string') {
        const message = await this.bot.telegram[this.#actionFunction](ctx.chat?.id!, this.item, {
          reply_markup: {
            inline_keyboard: this.render(),
          }
        });
        this.#messageId = message.message_id;
      } else if (this.#actionFunction === 'sendMessage' && typeof this.item !== 'string') {
        const error = new TypeError('cannot send message for non string item');
        this.emit(new Event('error', error));
        throw error;
      } else if (this.#actionFunction !== 'sendMessage') {
        await this.bot.telegram[this.#actionFunction](ctx.chat?.id!, this.item, {
          reply_markup: {
            inline_keyboard: this.render(),
          }
        });
      }
    } else if (this.#mode === 'edit') {
      if (this.options.type === 'message' && typeof this.item === 'string') {
        await this.bot.telegram.editMessageText(ctx.chat?.id!, this.#messageId, undefined, this.item, {
          reply_markup: {
            inline_keyboard: this.render(),
          }
        });
      } else if (this.#actionFunction === 'sendMessage' && typeof this.item !== 'string') {
        const error = new TypeError('cannot send message for non string item');
        this.emit(new Event('error', error));
        throw error;
      } else if (this.options.type !== 'message') {
        await this.bot.telegram.editMessageMedia(ctx.chat?.id!, this.#messageId, undefined, {
          type: this.options.type,
          media: this.item
        }, {
          reply_markup: {
            inline_keyboard: this.render(),
          }
        });
      }
    }
  }
}


/** 
 * Capitalize first letter
 */
function capitalize<S extends string>(str: S): Capitalize<S> {
  return str.charAt(0).toUpperCase() + str.slice(1) as Capitalize<S>;
}