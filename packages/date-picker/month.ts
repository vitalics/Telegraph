import { Button } from '@tlgr/button';
import dayjs, { Dayjs } from 'dayjs';

import { Context, Telegraf } from 'telegraf';
import { InlineKeyboardButton, Update } from 'telegraf/typings/core/types/typegram';
import { chunks, Helper } from './helper';
import { MonthOptions } from './types';
import { MonthPickerButton } from './button';

import { Inline, Event } from '@tlgr/component';

class MainEvents extends Event<'click' | 'prev' | 'next', [ctx: Context<Update>, date: Dayjs]>{ }

class YearOrMonth extends Event<'year' | 'month', [ctx: Context<Update>, yearOrMonth: number]> {
}

export default class MonthPicker extends Inline<[YearOrMonth, MainEvents]> {
  #date = this.options?.date ? dayjs(this.options?.date) : dayjs()
  get date() {
    return this.#date.toDate();
  }
  readonly mode = this.options?.mode ?? 'edit';

  readonly #nextButton = new Button(this.bot, this.options?.controls?.next?.symbol ?? '>', { prefix: `@tlgr/date-picker/month/next/${this.#date.month() + 1}`, disableUUID: true, alert: this.options?.controls?.next?.alert });
  readonly #prevButton = new Button(this.bot, this.options?.controls?.prev?.symbol ?? '<', { prefix: `@tlgr/date-picker/month/prev/${this.#date.month() - 1}`, disableUUID: true, alert: this.options?.controls?.prev?.alert });
  readonly #currentYYYYButton = new Button(this.bot, this.#date.format('YYYY'))
  readonly #helper = Helper({
    date: this.#date,
    disableBeforeToday: !this.options?.showPast,
    locale: this.options?.locale
  }).Month({ chunks: undefined }).render();

  readonly #months: Button[][];
  constructor(readonly bot: Telegraf, readonly options?: MonthOptions) {
    super(bot);

    const months = (this.#helper as string[]).map((month: string, index) => {
      const day = this.#date.set('month', index).set('date', 1);
      return new MonthPickerButton(this.bot, month ? month : this.options?.controls?.empty?.symbol ?? ' ', day);
    });
    this.#months = chunks(months, !Number.isNaN(Number(this.options?.chunks)) ? Number(this.options?.chunks) : 3);
    debugger;

    this.subscribe();
  }

  private subscribe() {
    const monthRegex = new RegExp('@tlgr/date-picker/month/current');

    // click
    this.bot.action(monthRegex, (ctx, next) => {
      // ctx.match.input = @tlgr/date-picker/month/current-<MM>/<YYYY>
      const [mm, yyyy] = ctx.match.input.split('-').at(-1)!.split('/').map(Number);
      const newDate = this.#date.set('month', mm - 1).set('year', yyyy).set('date', 1);
      this.emit(new YearOrMonth('month', ctx, newDate.month()));
      this.emit(new MainEvents('click', ctx, newDate));
      next();
    });
    // previous click
    this.#prevButton.on('click', (ctx, button) => {
      const newDate = this.#date.set('year', Number(button.payload)).set('month', 1).set('date', 1);

      // unsubscribe to previous events
      this.cleanup();

      const newPicker = new MonthPicker(this.bot, { ...this.options, date: newDate })
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
        ctx.reply('Pick month', {
          reply_markup: {
            inline_keyboard: newPicker.render(),
          }
        })
      }
      this.emit(new YearOrMonth('month', ctx, newDate.month()));
      this.emit(new MainEvents('prev', ctx, newDate));
    });

    // next click
    this.#nextButton.on('click', (ctx, button) => {
      const newDate = this.#date.set('year', Number(button.payload)).set('month', 0).set('date', 1);
      // unsubscribe
      this.cleanup();

      const newPicker = new MonthPicker(this.bot, { ...this.options, date: newDate })
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
        });
      } else {
        ctx.reply('Pick date', {
          reply_markup: {
            inline_keyboard: newPicker.render(),
          }
        })
      }
      this.emit(new YearOrMonth('month', ctx, newDate.month()));
      this.emit(new MainEvents('next', ctx, newDate));
    });

  }

  render(): InlineKeyboardButton.CallbackButton[][] {
    const header = [
      this.#prevButton.render(String(this.#date.year() - 1)),
      this.#currentYYYYButton.render(String(this.#date.year())),
      this.#nextButton.render(String(this.#date.year() + 1)),
    ];

    return (
      [
        // <prev control> <MM/YYYY> <next control>
        header,
        // Jan, Feb, Mar, etc months
        ...this.#months.map(mChunk => mChunk.map(month => month.render())),
      ]
    )
  }
}
