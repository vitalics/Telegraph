# Button component

## Installation

[npm](https://www.npmjs.com/)

``` bash
npm install @tlgr/button
```

[yarn](https://yarnpkg.com/)

``` bash
yarn add @tlgr/button
```

[pnpm](https://pnpm.io/)

``` bash
pnpm add @tlgr/button
```

## Overview

Button provides simple functionality for button.

This component realize `click` event.

Each button has unique identified.

## Example

``` js
// simple example without overrides
const bot = new Telegraf(TOKEN);
const button = new Button(bot, 'Custom Name', options)

bot.command('button', (ctx) => {
  ctx.sendMessage(ctx.chat.id, 'Hello with button example', {
    reply_markup: {
      inline_keyboard: [
        [button.render('SOME_DATA')],
      ],
    }
})

})

button.on('click',(ctx, button) =>{
    console.log('button info', button)

// button = {
// uuid: hash,
// name: '@tlgr/button/<hash>'
// prefix: '@tlgr/button',
// render() // telegram render function
// payload: SOME_DATA
// }
});

// without hash
const buttonWithoutHash = new Button(bot, 'button without hash',{
disableUUID: true
});

buttonWithoutHash.on('click', (ctx, button) => {
  console.log('button info without hash:',button);
// button = {
// uuid: hash,
// name: '@tlgr/button'
// prefix: '@tlgr/button',
// render() // telegram render function
// payload: '' (since render function is not called)
// }

// with custom name
const buttonWithName = new Button(bot, 'button without hash',{
prefix: '@tlgr/custom-name'
});

buttonWithName.on('click', (ctx, button) => {
  console.log('button info without hash:',button);
// button = {
// uuid: hash,
// name: '@tlgr/custom-name/<hash>'
// prefix: @tlgr/custom-name',
// render() // telegram render function
// payload: '' (since render function is not called)
// }
})
```

## Demo

Code available at [`bin.ts`](./bin.ts) file.

![inline image](./assets/button.png)

![Video](./assets/button-demo.ogg)
