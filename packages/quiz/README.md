# Quiz

Telegram Quiz component.

See full [docs](https://vitalics.github.io/Telegraph/docs/api/quiz/base)

## Installation

[npm](https://www.npmjs.com/)

``` bash
npm install @tlgr/quiz
```

[yarn](https://yarnpkg.com/)

``` bash
yarn add @tlgr/quiz
```

[pnpm](https://pnpm.io/)

``` bash
pnpm add @tlgr/quiz
```

## Example

``` js
import {Quiz} from '@tlgr/quiz'
// simple example without overrides
const bot = new Telegraf(TOKEN);
const quiz = new Quiz(bot, options);

bot.start(ctx => {
  quiz.send(ctx);
})

bot.launch()
```

## Demo

Code available at [`bin.ts`](./bin.ts) file.
