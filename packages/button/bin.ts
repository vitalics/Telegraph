import { Telegraf } from 'telegraf';

import Phone from './phone';
import Location, { Type } from './location';
import Quiz from './quiz';
import Poll from './poll';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

const location = new Location(bot);
const phone = new Phone(bot);
const quiz = new Quiz(bot);
const poll = new Poll(bot);

location.on('location', (ctx, location) => {
  ctx.reply(`Your location is ${(location as Type).latitude}`);
});

bot.command('start', async ctx => {
  await bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to button demo.', {
    reply_markup: {
      one_time_keyboard: true,
      keyboard: [
        [phone.render()],
        [location.render()],
        [quiz.render()],
        [poll.render()],
      ],
    }
  });
});

bot.launch()
  .then(() => console.log('bot started'))
  .catch(e => {
    console.log('bot error');
    console.error(e);
  });
