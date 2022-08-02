import { Button } from '@tlgr/button';
import { InlineComponent, Event } from '@tlgr/component';

import dayjs, { Dayjs } from 'dayjs';
import { Context, Telegraf } from 'telegraf';
import { InlineKeyboardButton, Update } from 'telegraf/typings/core/types/typegram';

import { DayPickerButton } from './button';
import { Helper } from './helper';
import type { Options } from './types';

class Navigation extends Event<[ctx: Context<Update>, date: Dayjs], 'next' | 'prev'>{ }

class Click extends Event<[ctx: Context<Update>, date: Dayjs], 'click'>{
  constructor(...payload: [ctx: Context<Update>, date: Dayjs]) {
    super('click', ...payload);
  }
}
class Weekday extends Event<[ctx: Context<Update>, weekday: string], 'weekday'>{
  constructor(...payload: [ctx: Context<Update>, weekday: string]) {
    super('weekday', ...payload);
  }
}
class Day extends Event<[ctx: Context<Update>, date: number], 'day'>{
  constructor(...payload: [ctx: Context<Update>, date: number]) {
    super('day', ...payload);
  }
}

class MonthYear extends Event<[ctx: Context<Update>, monthYear: `${number}${number}/${number}${number}${number}${number}`], 'monthyear'>{
  constructor(...payload: [ctx: Context<Update>, monthYear: `${number}${number}/${number}${number}${number}${number}`]) {
    super('monthyear', ...payload);
  }
}

export default class DayPicker extends InlineComponent<[Day, Weekday, MonthYear, Navigation, Click]> {
  #day = this.options?.date ? dayjs(this.options?.date) : dayjs();
  #nextButton = new Button(this.bot, this.options?.controls?.next?.symbol ?? '>', { prefix: `@tlgr/date-picker/day/next/${this.date.month()}`, disableUUID: true, alert: this.options?.controls?.next?.alert });
  #prevButton = new Button(this.bot, this.options?.controls?.prev?.symbol ?? '<', { prefix: `@tlgr/date-picker/day/prev/${this.date.month()}`, disableUUID: true, alert: this.options?.controls?.prev?.alert });
  #currentMMYYYYButton = new Button(this.bot, this.date.format('MM/YYYY'));
  #weekdays: Button[];
  #helper = Helper({ locale: this.options?.locale, disableBeforeToday: !this.options?.showPast, date: this.date }).Weekdays({ chunks: true }).render();
  #buttons: Button[][];
  readonly mode = this.options?.mode ?? 'edit';
  get date() {
    return this.#day;
  }
  constructor(protected readonly bot: Telegraf, readonly options?: Options) {
    super(bot);
    const [weekdays, days] = this.#helper;
    this.#buttons = (days as (string | null)[][]).map(day =>
      day.map(d => {
        const button = new DayPickerButton(this.bot, d ?? this.options?.controls?.empty?.symbol ?? ' ', this.date)
        return button;
      })
    );
    this.#weekdays = (weekdays as unknown as string[]).map(weekday => new Button(this.bot, String(weekday), { disableUUID: true, prefix: '@tlgr/weekday' }));

    // subscribe to events
    this.subscribe();
  }

  // subscription to bot actions
  private subscribe() {
    const dayRegex = new RegExp('@tlgr/date-picker/day/current');
    const weekdayRegex = new RegExp('@tlgr/date-picker/weekday');
    this.#currentMMYYYYButton.on('click', (ctx, button) => {
      this.emit(new Event('monthyear', ctx, this.date.format('MM/YYYY')));
    });

    // weekday click
    this.bot.action(weekdayRegex, (ctx, next) => {
      // ctx.match.input = @tlgr/weekday-<Weekday>
      const [, weekday] = ctx.match.input.split('-');
      this.emit(new Weekday(ctx, weekday));
      next();
    });
    // day click
    this.bot.action(dayRegex, (ctx, next) => {
      // ctx.match.input = @tlgr/day-picker-DD/MM/YYYY
      const [, , ddmmyyyy] = ctx.match.input.split('-');
      const [dd, mm, yyyy] = ddmmyyyy.split('/').map(Number);
      const date = dayjs(Date.UTC(yyyy, mm - 1, dd, 1, 1));
      this.emit(new Day(ctx, dd));
      this.emit(new Click(ctx, date));
      next();
    });
    // previous click
    this.#prevButton.on('click', (ctx, button) => {
      const prevMonth = button.payload as number;
      const newDate = this.date.set('month', prevMonth).set('date', 1);
      // unsubscribe previous events
      this.cleanup();
      const newPicker = new DayPicker(this.bot, { ...this.options, date: newDate })
      if (this.options?.controls?.prev?.alert && this.options?.controls?.prev?.alert.show) {
        ctx.answerCbQuery(this.options?.controls?.prev?.alert.text, { show_alert: this.options?.controls?.prev?.alert.mode === 'modal' });
      }
      if (this.mode === 'edit') {
        // @ts-ignore
        const prevText = ctx.callbackQuery.message!.text;
        ctx.editMessageText(prevText, {
          reply_markup: {
            inline_keyboard: newPicker.render(),
          }
        })
      } else {
        ctx.reply('Pick date', {
          reply_markup: {
            inline_keyboard: newPicker.render(),
          }
        })
      }
      this.emit(new Navigation('prev', ctx, newDate));
    })

    // next click
    this.#nextButton.on('click', async (ctx, button) => {
      const nextMonth = button.payload as number;
      const newDate = this.date.set('month', nextMonth).set('date', 1);
      // unsubscribe previous events
      this.cleanup();

      const newPicker = new DayPicker(this.bot, { ...this.options, date: newDate })
      if (this.options?.controls?.next?.alert && this.options?.controls?.next?.alert.show) {
        await ctx.answerCbQuery(this.options?.controls?.next?.alert.text, { show_alert: this.options?.controls?.next?.alert.mode === 'modal' });
      }
      if (this.mode === 'edit') {
        // @ts-ignore
        const prevText = ctx.callbackQuery.message!.text;
        ctx.editMessageText(prevText, {
          reply_markup: {
            inline_keyboard: newPicker.render(),
          }
        });
      } else {
        ctx.reply('Pick date', {
          reply_markup: {
            inline_keyboard: newPicker.render(),
          }
        })
      }
      this.emit(new Navigation('next', ctx, newDate));
    });
  }
  /** Telegram keyboard buttons */
  render(): InlineKeyboardButton.CallbackButton[][] {
    const header = [
      this.#prevButton.render(String(this.date.month() - 1)),
      this.#currentMMYYYYButton.render(String(this.date.format('MM/YYYY'))),
      this.#nextButton.render(String(this.date.month() + 1)),
    ];

    return (
      [
        // <prev control> <MM/YYYY> <next control>
        header,
        // <MON> <TUE> <WED> etc
        this.#weekdays.map(b => b.render(b.text)),
        // <1> <2> <3> etc days as grid(splitted by 7 chunks)
        ...this.#buttons.map(button => button.map(b => b.render()))
      ]
    )
  }
}
