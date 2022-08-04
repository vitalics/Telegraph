import { randomUUID } from 'crypto';

import { Context, Markup, Telegraf } from 'telegraf';
import { InlineKeyboardButton, Update } from 'telegraf/typings/core/types/typegram';
import { Options } from './types';
import { Inline, Event } from '@tlgr/component';

type Click = Event<'click', [ctx: Context<Update>, button: Button]>;

export default class Button extends Inline<[Click]> {
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
  /**
   * Generated button unique name
   * @example
   * '@tlgr/button/24958fff-ae0d-4320-b590-291e2a76ad41'
   * @memberof Button
   */
  #name: string;
  /**
   * Component full name
   *
   * @readonly
   * @memberof Button
   */
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
      this.emit(new Event('click', ctx, this));
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
  render(payload = this._payload): InlineKeyboardButton.CallbackButton {
    const divider = this.options?.payloadDivider ?? '-';
    const resolved = payload ? `${this.name}${divider}${payload.toString()}` : this.name
    this._payload = payload;
    return Markup.button.callback(this.text, resolved);
  }
}
