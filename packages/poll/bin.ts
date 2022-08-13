import { Context, Telegraf } from 'telegraf';

import Poll from './poll'

const TOKEN = '';
const bot = new Telegraf(TOKEN);


const poll = new Poll(bot,
  {
    name: 'QWE Poll',
    options: ['option 1', 'option 2'],
    open_period: 600,
    is_anonymous: true,
  });

poll.on('sent', (ctx, instance) => {
  ctx.reply(`Please reply the poll ${instance.options.name}!`);
});

poll.on('answer_user', (poll, instance) => {
  // console.log('user answer context:', poll);
  // console.log(`Got Update votes Count: ${poll.user.first_name}`);
  // ctx.reply('Thanks for submitting');
});

poll.on('answer_anonymous', (poll, instance) => {
  // console.log(`Got Update votes Count: ${poll.total_voter_count}`);
  // ctx.reply('Thanks for submitting');
  console.log('Thanks for submitting');
});

bot.start(async (ctx) => {
  await poll.send(ctx);
  console.log('started?', poll.opened);
});

bot.launch();