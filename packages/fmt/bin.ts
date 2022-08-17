import { Telegraf } from 'telegraf';

import fmt from './fmt';
import { bold, italic, strikethrough } from './index';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

bot.start(ctx => {
  const formatted = fmt(`this %s shows ${bold("bold")}, ${italic(
    "italic"
  )} and ${strikethrough("strikethrough")} texts`, 'example');
  ctx.reply(...formatted);
});

bot.launch();
