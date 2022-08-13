# Poll

Telegram poll component.

See full [docs](https://vitalics.github.io/Telegraph/docs/api/poll/base)

## Installation

[npm](https://www.npmjs.com/)

``` bash
npm install @tlgr/poll
```

[yarn](https://yarnpkg.com/)

``` bash
yarn add @tlgr/poll
```

[pnpm](https://pnpm.io/)

``` bash
pnpm add @tlgr/poll
```

## Example

``` js
import {Poll} from '@tlgr/poll'
// simple example without overrides
const bot = new Telegraf(TOKEN);
const poll = new Poll(bot, options);

bot.start(ctx => {
  poll.send(ctx);
})

bot.launch()
```

## Demo

Code available at [`bin.ts`](./bin.ts) file.
