# Fmt

Formatter for telegram context.

## Supported formatter functions

- bold - make text **bold**
- italic - make text _italic_
- underline - make text <u>underline</u>
- strikethrough - make text ~~strikethrough~~
- cash - add currency sign based on locale and currency sign.
- code - add code snippet
- command - add `/` symbol. incoming string must be without spaces ``.
- email - transform name and host. E.g. `first_last@example.com`
- hashtag - add `#` sign at the string.
- hashtags - same as `hashtag` but accepts many hash strings.
- link - create link. If `name` parameter is passed - create a text with link.
- mention - add `@` sign at the start of string.
- spoiler - make incoming text to spoiler

## Example

``` js
import {Telegraf} from 'telegraf';
import {fmt, bold, italic} from '@tlgr/fmt'

const bot = new Telegraf('<API TOKEN>');

bot.start(ctx => { // bot action when /start command typed
  ctx.reply(...fmt(`This text is ${bold('bolded')}. This text is ${italic('italic')}`)); // This text is **bolded**. This text is _italic_
});

bot.launch();
```
