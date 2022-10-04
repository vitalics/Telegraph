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

1. `string` - use it in case of using template string.
2. `react` - use it in case of using JSX components.

> Also its important to use spread operator for render function since this function is returns tuple with raw text and it's modifications (like bold, mention, etc.)

3. `markdown` (deprecated) - use this package when you want to reply with markdown V2.
4. `html` (deprecated) - use this package when you want to reply with HTML.

Example with react:

``` tsx
import { h, Fragment } from 'preact';
import { render, Bold } from '@tlgr/fmt/react';

const bot = new Telegraf('<API TOKEN>');

bot.start(ctx => {
  // NOTE: use spread operator, since render returns raw string with formatting
  ctx.reply(...render(
    <Fragment>
        <Bold>Some text is bolded</Bold>
    </Fragment>
  ), {}) // others Telegram reply options
})

bot.launch();

```

Example with string:

``` tsx
import {render, bold} from '@tlgr/fmt/string';

const bot = new Telegraf('<API TOKEN>');

bot.start(ctx => {
  // NOTE: not use spread operator, since render returns raw string
  ctx.reply(...render(
   `${bold('this text is bolded')}`
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
