import { Event } from '@tlgr/component';
import { Context, Telegraf } from 'telegraf';
import { KeyboardButton, Update } from 'telegraf/typings/core/types/typegram';
import Keyboard from './keyboard';

type Contact = Event<'contact', [ctx: Context<Update>, phone: string]>;

/**
 * Share phone number button.
 *
 *
 * @export
 * @class Phone
 * @extends {Keyboard<[Contact]>}
 */
export default class Phone extends Keyboard<[Contact]> {
  constructor(readonly bot: Telegraf, readonly text = 'share phone number') {
    super(bot, text, {
      prefix: '@tlgr/button/keyboard/phone'
    });

    bot.on("contact", (ctx, next) => {
      const phoneNumber = ctx.update.message.contact.phone_number;
      this.emit(new Event('contact', ctx, phoneNumber));
      this.emit(new Event('click', ctx, this));
      next();
    });
  }

  render(): KeyboardButton {
    return {
      text: this.text,
      request_contact: true,
    }
  }
}