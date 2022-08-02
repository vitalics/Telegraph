import { Telegraf } from 'telegraf';

import Button from './inline';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

const bump = new Button(bot, 'click me!',);

bump.on('click', (ctx, button) => {
  ctx.reply(`Congrats! Your are clicked with name: ${button.name} and payload: ${button.payload.toString()}`)
})


bot.command('start', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to button demo.', {
    reply_markup: {
      inline_keyboard: [
        [bump.render('DATA')],
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
