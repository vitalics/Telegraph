import { InlineKeyboardButton } from 'telegraf/typings/core/types/typegram';
import Component from './component';

import { Event } from './event';
import { Payload } from './types';

/** 
 * Inline Component.
 * 
 * `render` returns `InlineKeyboardButton`
 */
export default abstract class InlineComponent<Events extends Event[] = []> extends Component<Events> {
  /** current component payload */
  get payload(): Payload {
    return this._payload;
  }
  protected _payload: Payload = '';
  /**
   * render function.
   *
   * @abstract
   * @param {Payload} [payload]
   * @return {*}  {(InlineKeyboardButton | InlineKeyboardButton[] | InlineKeyboardButton[][])}
   * @memberof InlineComponent
   */
  abstract render(payload?: Payload): InlineKeyboardButton | InlineKeyboardButton[] | InlineKeyboardButton[][];
}
