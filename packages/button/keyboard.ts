import { Keyboard as KeyboardComponent, Event } from '@tlgr/component';
import { randomUUID } from 'crypto';
import { Context, Markup, Telegraf } from 'telegraf';
import { KeyboardButton, Update } from 'telegraf/typings/core/types/typegram';
import { Options } from './types';

type Click = Event<'click', [ctx: Context<Update>, button: Keyboard]>;

export default class Keyboard<AdditionalEvents extends Event[] = []> extends KeyboardComponent<[Click, ...AdditionalEvents]> {
  readonly uuid: string | undefined;
  /**
   * prefix base name
   * @default
   * '@tlgr/button/keyboard'
   *
   * @type {string}
   * @memberof Button
   */
  #prefix: string = '@tlgr/button/keyboard';
  /**
   * Generated button unique name
   * @example
   * '@tlgr/button/keyboard/24958fff-ae0d-4320-b590-291e2a76ad41'
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
   * Creates an instance of Keyboard Button.
   * 
   *  **NOTE** text should be unique.
   * @param {Telegraf} bot Telegraf bot instance
   * @param {string} text button text.
   * @param {Options} [options]
   * @memberof Keyboard
   */
  constructor(readonly bot: Telegraf, readonly text: string, readonly options?: Options) {
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
    this.subscribe();
  }

  private subscribe() {
    this.bot.hears(this.text, async (ctx, next) => {
      this.emit(new Event('click', ctx, this));
      if (this.options?.alert) {
        await ctx.answerCbQuery(this.options.alert.text, { show_alert: this.options.alert.mode === 'modal' })
      }
      await next();
    });
  }

  render(): KeyboardButton {
    const button: KeyboardButton = {
      text: this.text,
    }
    return button;
  }
}