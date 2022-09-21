# Fmt

Formatter for telegram context.

## Working with JSX

1. install `preact` dependency.

``` bash
npm i preact
```

2. update `tsconfig.json` file(if necessary)
and add jsx support:

``` json
{
  "compilerOptions": {
    // tsconfig options
      "jsx": "react",
      "jsxFactory": "h"
    }
}
```

3. Update file names(`.js` -> `.jsx` or `.ts` -> `.tsx`)

4. Enjoy using JSX :)

Example:

``` tsx
import { h, Fragment } from 'preact';
import {render, Bold} from '@tlgr/fmt/default';

const bot = new Telegraf('<API TOKEN>');

bot.start(ctx => {
  ctx.reply(...render(
    <Fragment>
        <Bold>Some text is bolded</Bold>
    </Fragment>
))
})

bot.launch();

```

## Reply context

There is 3 various JSX reply context.

1. default - use it for `ctx.reply` function.

> Also its important to use spread operator for render function since this function is returns tuple with raw text and it's modificators(like bold, mention, etc.)

2. markdown - use this package when you want to reply with markdown V2.
3. html - use this package when you want to reply with HTML.

Example with markdown:

``` tsx
import { h, Fragment } from 'preact';
import {render, Bold} from '@tlgr/fmt/markdown';

const bot = new Telegraf('<API TOKEN>');

bot.start(ctx => {
  // NOTE: not use spread operator, since render returns raw string
  ctx.replyWithMarkdownV2(render(
    <Fragment>
        <Bold>Some text is bolded</Bold>
    </Fragment>
  ))
})

bot.launch();

```


Example with html:

``` tsx
import { h, Fragment } from 'preact';
import {render, Bold} from '@tlgr/fmt/markdown';

const bot = new Telegraf('<API TOKEN>');

bot.start(ctx => {
  // NOTE: not use spread operator, since render returns raw string
  ctx.replyWithHTML(render(
    <Fragment>
        <Bold>Some text is bolded</Bold>
    </Fragment>
  ))
})

bot.launch();

```

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
