import { Fragment, h } from 'preact';
import { Telegraf } from 'telegraf';

import { Bold, render } from './default';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

bot.start(ctx => {
  ctx.reply(...render(
    <Fragment>
      <Bold>Some bold texts</Bold>
    </Fragment>
  ))
});

bot.launch();
