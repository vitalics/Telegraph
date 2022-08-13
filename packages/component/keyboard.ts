import { KeyboardButton } from 'telegraf/typings/core/types/typegram';

import Component from './component';
import { Event } from './event';

/** 
 * Keyboard Component.
 * 
 * `render` returns `KeyboardButton` type
 * 
 * **Note** payload is not available for Keyboard component.
 * name should be unique.
 */
export default abstract class KeyboardComponent<Events extends Event[] = []> extends Component<Events> {
  /**
   * render function.
   *
   * @abstract
   * @param {Payload} [payload]
   * @return {*}  {(KeyboardButton | KeyboardButton[] | KeyboardButton[][])}
   * @memberof KeyboardComponent
   */
  abstract render(): KeyboardButton | KeyboardButton[] | KeyboardButton[][];
}
