import { Dayjs } from 'dayjs';
import { Telegraf } from 'telegraf';

import MonthPicker from './month';
import DayPicker from './day';

const TOKEN = ''

const bot = new Telegraf(TOKEN);

// combined example

// month picker

const monthPicker = new MonthPicker(bot);

monthPicker.on('click', (ctx, date) => {
  console.log('click to date', date);
  ctx.reply('you choose' + (date as Dayjs).format('MM/YYYY'));
});

monthPicker.on('next', (ctx, date) => {
  console.log('next year', date);
  ctx.reply('next year' + (date as Dayjs).format('YYYY'));
});

monthPicker.on('prev', (ctx, date) => {
  console.log('prev year', date);
  ctx.reply('prev year' + (date as Dayjs).format('YYYY'));
});

bot.command('month', ctx => {
  ctx.reply('pick month', {
    reply_markup: {
      inline_keyboard: monthPicker.render()
    }
  })
})

// day picker example

const picker = new DayPicker(bot, {
  controls: {
    empty: { symbol: '💀' },
  },
  showPast: false,
  mode: 'edit'
});


picker.on('click', (ctx, date) => {
  ctx.reply('You selected ' + (date as Dayjs).format('DD/MM/YYYY'));
});

picker.on('day', (ctx, date) => {
  ctx.reply('day event ' + date);
});
picker.on('weekday', (ctx, weekday) => {
  ctx.reply('weekday event: ' + weekday);
});

picker.on('next', (ctx, date) => {
  ctx.reply('next month is ' + (date as Dayjs).format('MMMM'));
});

picker.on('prev', (ctx, date) => {
  ctx.reply('prev month is ' + (date as Dayjs).format('MMMM'));
});

bot.command('calendar', (ctx) => {
  ctx.reply('Pick Date', {
    reply_markup: {
      inline_keyboard: picker.render(),
    }
  });
});

bot.command('start', ctx => {
  ctx.reply('Hello!. You can write "/calendar" command and pick a future date')
})

bot.launch();
