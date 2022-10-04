import { Fragment, h } from 'preact';
import { Telegraf } from 'telegraf';

import { Bold, Break, render, Spoiler } from './react';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

bot.start(ctx => {
  ctx.reply(...render(
    <Fragment>
      <Bold>Some bold texts</Bold>
      <Break />
      Spoiler is <Spoiler>spoiler</Spoiler>
    </Fragment>
  ))
});

bot.launch();
