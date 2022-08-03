import { InlineKeyboardButton } from 'telegraf/typings/core/types/typegram';
import Component from './component';

import { Event } from './event';

export default abstract class InlineComponent<Events extends Event[] = []> extends Component<Events> {
  abstract render(): InlineKeyboardButton | InlineKeyboardButton[] | InlineKeyboardButton[][];
}
