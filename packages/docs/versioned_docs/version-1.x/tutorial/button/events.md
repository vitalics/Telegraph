# Events

Button component has several events and lifecycle hooks

The lifecycle hooks are:

1. constructor
2. `render`
3. `cleanup`

Example:

```jsx title="index.ts"
import {Telegraf} from 'telegraf';

const bot = new Telegraf('<TOKEN>');
// constructor lifecycle
const button = new Button(bot, 'button name', options);

button.on('click', (ctx, button) => {
    ctx.reply(`Congrats! You clicked with payload: ${button.payload}`)
});

bot.command('start', ctx => {
    ctx.sendMessage('Hello from button example', {
    reply_markup: {
      inline_keyboard: [
        // render lifecycle with custom payload
        [button.render('DATA')],
      ],
    }
  });
});

// after 5 seconds, "click" event is never been called anymore.
setTimeout(() => {
  button.cleanup();
}, 5000);

bot.launch();
```
