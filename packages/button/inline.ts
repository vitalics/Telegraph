import { randomUUID } from 'crypto';

import { Context, Markup, Telegraf } from 'telegraf';
import { InlineKeyboardButton, Update } from 'telegraf/typings/core/types/typegram';
import { Options } from './types';
import { InlineComponent, Event } from '@tlgr/component';

class Click extends Event<[ctx: Context<Update>, button: Button], 'click'>{
  constructor(readonly payload: [ctx: Context<Update>, button: Button]) {
    super('click', ...payload);
  }
}

export default class Button extends InlineComponent<[Click]> {
  readonly uuid: string | undefined;
  /**
   * prefix base name
   * @default
   * '@tlgr/button'
   *
   * @type {string}
   * @memberof Button
   */
  #prefix: string = '@tlgr/button';
  #payload: PropertyKey | boolean = '';

  get payload() {
    return this.#payload;
  }
  /**
   * Generated button unique name
   * @example
   * '@tlgr/button/24958fff-ae0d-4320-b590-291e2a76ad41'
   * @memberof Button
   */
  #name: string;
  get name() {
    return this.#name
  }
  /**
   * Creates an instance of Button.
   * @example
   * const bot = new Telegraf(token);
   * const cancelButton = new CancelButton(bot);
   * bot.command('start', ctx => {
   * console.log('start command')
   * bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
   * reply_markup: {
   *  keyboard: [
   *    [
   *      cancelButton.render(),
   *      Markup.button.text('Dump button')
   *    ],
   *  ]
   * },
   * })
   * });
   * @param {Telegraf} bot
   * @param {string} text
   * @memberof Button
   */
  constructor(protected readonly bot: Telegraf, readonly text: string, readonly options?: Options) {
    super(bot);
    if (options?.prefix) {
      this.#prefix = options.prefix;
    }
    if (options?.disableUUID) {
      this.#name = this.#prefix;
    } else {
      this.uuid = randomUUID();
      this.#name = `${this.#prefix}/${this.uuid}`;
    }

    // subscribe to events
    this.subscribe();
  }

  private subscribe() {
    const regex = new RegExp(this.name);
    this.bot.action(regex, async (ctx, next) => {
      this.emit(new Click([ctx, this]));
      if (this.options?.alert) {
        await ctx.answerCbQuery(this.options.alert.text, { show_alert: this.options.alert.mode === 'modal' })
      }
      await next();
    });
  }

  /**
   * Render function. Returns telegram button instance
   * @param payload callable unique payload. Payload devided via `-` symbol
   * @returns Inline keyboard
   */
  render(payload: PropertyKey | boolean = this.#payload): InlineKeyboardButton.CallbackButton {
    const divider = this.options?.payloadDivider ?? '-';
    const resolved = payload ? `${this.name}${divider}${payload.toString()}` : this.name
    this.#payload = payload;
    return Markup.button.callback(this.text, resolved);
  }
}
