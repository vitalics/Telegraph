import { Telegraf } from 'telegraf';

import { render, Text } from './src';
import Break from './src/Break';
import Mention from './src/mention';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

bot.start(async ctx => {
  await ctx.reply(...render(
    <>
      <Text.Bold>Some bold texts</Text.Bold>
      <Break />
      Spoiler is <Text.Spoiler>spoiler</Text.Spoiler>
      <Break />

      I also mention you: <Mention username='sqrtapp' />
    </>
  ))
});

bot.launch();
