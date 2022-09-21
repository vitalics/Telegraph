# Analytics

Telegram Component which allows you to collect any events with bot.

## Installation

PNPm

```bash
pnpm add @tlgr/analytics
```

## Supported plugins

- Console
- File
- Stream

## Writing own plugins

1. import plugin:

``` ts
// filename: custom-plugin.ts
import type { Plugin } from '@tlgr/analytics/plugins';

class MyPlugin implements Plugin {
  name = 'custom plugin';

  constructor(){
    http.initSession();
  }

  listener(event: string, param: any) {
    console.log(event, param);
    if(event === 'my custom event') {
      http.post('http://server.com', param)
    }
  }
  end(){
    http.closeSession();
  }
}

```

2. use custom plugin in your code

``` ts
import { Telegraf } from 'telegraf';
import Analytics from './analytics';

import {MyPlugin} from './custom-plugin';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

const analytics = new Analytics(bot, new MyPlugin());

bot.start(ctx => {
  // sends hello world when user sends "/start" command
  bot.telegram.sendMessage(ctx.chat.id, 'Hello world');
});

analytics.enable(true);
```

## API

enable(launchImmediate) - enable analytics, if `launchImmediate` is true - also starts bot, similar as `bot.launch()`

disable(stopImmediate) - stops bot, if `stopImmediate` is true - also starts bot, similar as `bot.close()`
