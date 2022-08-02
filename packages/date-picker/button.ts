import { Telegraf } from 'telegraf';

import { Button } from '@tlgr/button';
import dayjs, { Dayjs } from 'dayjs';
import { InlineKeyboardButton } from 'telegraf/typings/core/types/typegram';

export class DayPickerButton extends Button {
  readonly date!: Dayjs;
  constructor(protected readonly bot: Telegraf, readonly text: string, date: Dayjs) {
    super(bot, text, {
      prefix: '@tlgr/date-picker/day/current',
      disableUUID: true,
    });
    const dayOfMonth = Number.parseInt(text)
    if (!Number.isNaN(dayOfMonth) && Number.isFinite(dayOfMonth)) {
      this.date = date.set('date', dayOfMonth);
    } else {
      // started UTC date
      this.date = dayjs('NaN');
    }
  }
  /**
   * 
   * @return {*} 
   * @memberof DatePickerButton
   */
  render(): InlineKeyboardButton.CallbackButton {
    return super.render(this.date.format('DD/MM/YYYY'));
  }
}


export class MonthPickerButton extends Button {
  constructor(protected readonly bot: Telegraf, readonly text: string, readonly date: Dayjs) {
    super(bot, text, {
      prefix: '@tlgr/date-picker/month/current',
      disableUUID: true,
    });
  }
  /**
   * 
   * @return {*} 
   * @memberof DatePickerButton
   */
  render(): InlineKeyboardButton.CallbackButton {
    return super.render(this.date.format('MM/YYYY'));
  }
}