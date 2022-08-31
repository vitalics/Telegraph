import { Telegraf } from 'telegraf';
import Analytics from './analytics';

import Console from './plugins/console';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

const analytics = new Analytics(bot, new Console());

bot.start(ctx => {
  bot.telegram.sendMessage(ctx.chat.id, 'Hello world');
});

analytics.enable(true);
