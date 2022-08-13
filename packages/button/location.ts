import { Event } from '@tlgr/component';
import { Context, Telegraf } from 'telegraf';
import type { KeyboardButton, Update, Location as TgLocation } from 'telegraf/typings/core/types/typegram';

import Keyboard from './keyboard'

type LocationEvent = Event<'location', [ctx: Context<Update>, location: TgLocation]>;
export type Type = TgLocation;
/**
 * Share location button.
 *
 * @export
 * @class Location
 * @extends {Keyboard<[Contact]>}
 */
export default class Location extends Keyboard<[LocationEvent]> {
  /**
   * Creates an instance of Location.
   * 
   * Text should be unique.
   * 
   * @param {Telegraf} bot
   * @param {string} [text='share location']
   * @memberof Location
   */
  constructor(readonly bot: Telegraf, readonly text = 'share location') {
    super(bot, text, {
      prefix: '@tlgr/button/keyboard/location'
    });

    bot.on("location", (ctx, next) => {
      const location = ctx.update.message.location;
      this.emit(new Event('location', ctx, location));
      this.emit(new Event('click', ctx, this));
      next();
    });
  }

  render(): KeyboardButton {
    return {
      text: this.text,
      request_location: true,
    };
  }
}