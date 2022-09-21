"use strict";(self.webpackChunk_tlgr_docs=self.webpackChunk_tlgr_docs||[]).push([[1591],{1558:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release 1.4.0","metadata":{"permalink":"/Telegraph/blog/release 1.4.0","editUrl":"https://github.com/vitalics/telegraph/tree/main/packages/docs/blog/2022-09-21.mdx","source":"@site/blog/2022-09-21.mdx","title":"1.4.0 JSX and Analytics!","description":"The new telegraph component was landed and available on npm.js site.","date":"2022-09-21T00:00:00.000Z","formattedDate":"September 21, 2022","tags":[{"label":"release","permalink":"/Telegraph/blog/tags/release"},{"label":"telegraph","permalink":"/Telegraph/blog/tags/telegraph"},{"label":"formatting","permalink":"/Telegraph/blog/tags/formatting"},{"label":"fmt","permalink":"/Telegraph/blog/tags/fmt"},{"label":"analytics","permalink":"/Telegraph/blog/tags/analytics"},{"label":"jsx","permalink":"/Telegraph/blog/tags/jsx"}],"readingTime":0.73,"hasTruncateMarker":false,"authors":[{"name":"Vitali Haradkou","title":"Maintainer of Telegraph","url":"https://github.com/vitalics","imageURL":"https://github.com/vitalics.png","key":"vitalics"}],"frontMatter":{"slug":"release 1.4.0","title":"1.4.0 JSX and Analytics!","authors":["vitalics"],"tags":["release","telegraph","formatting","fmt","analytics","jsx"]},"nextItem":{"title":"1.3.0 is here!","permalink":"/Telegraph/blog/release 1.3.0"}},"content":"The new telegraph component was landed and available on [`npm.js`](https://npmjs.com) site.\\n\\n## [analytics](https://github.com/vitalics/telegraph/packages/analytics/)\\n\\nThis components listen any chat iteraction with user and emits events with `analytics` prefix.\\n\\nAnalytics components also defines `PluginAPI` to write a custom extensions for analytics. [See docs](https://vitalics.github.io/Telegraph/docs/tutorial/analytics#custom-plugins) how to work with plugins.\\n\\nInstallation:\\n\\n`npm i @tlgr/analytics`\\n\\nHow it works:\\n\\n```jsx title=example.ts\\nimport { Analytics } from \\"@tlgr/analytics\\";\\nimport { Console } from \\"@tlgr/analytics/plugins\\";\\nimport { Telegraf } from \\"telegraf\\";\\n\\nconst bot = new Telegraf(\\"<API TOKEN>\\");\\n\\nconst analytics = new Analytics(bot, new Console());\\n\\nanalytics.enable(true); // true - launch imidiately\\nbot.start((ctx) => {\\n  // send message\\n  ctx.reply(/** reply message */);\\n});\\n\\n// fires event with start command, and reply text as param.\\n```\\n\\nJSX support for `fmt` package.\\n\\nFor now, when you want to reply message, you can use `JSX` markup.\\n[See docs](https://vitalics.github.io/Telegraph/docs/tutorial/fmt/jsx) how to enable JSX support\\n\\nFull Changelog available at link: https://github.com/vitalics/Telegraph/blob/main/releases/v1.4.0.md"},{"id":"release 1.3.0","metadata":{"permalink":"/Telegraph/blog/release 1.3.0","editUrl":"https://github.com/vitalics/telegraph/tree/main/packages/docs/blog/2022-08-18.mdx","source":"@site/blog/2022-08-18.mdx","title":"1.3.0 is here!","description":"Version 1.2 was missed due to releasing issue.","date":"2022-08-18T00:00:00.000Z","formattedDate":"August 18, 2022","tags":[{"label":"release","permalink":"/Telegraph/blog/tags/release"},{"label":"telegraph","permalink":"/Telegraph/blog/tags/telegraph"},{"label":"formatting","permalink":"/Telegraph/blog/tags/formatting"},{"label":"fmt","permalink":"/Telegraph/blog/tags/fmt"}],"readingTime":0.445,"hasTruncateMarker":false,"authors":[{"name":"Vitali Haradkou","title":"Maintainer of Telegraph","url":"https://github.com/vitalics","imageURL":"https://github.com/vitalics.png","key":"vitalics"}],"frontMatter":{"slug":"release 1.3.0","title":"1.3.0 is here!","authors":["vitalics"],"tags":["release","telegraph","formatting","fmt"]},"prevItem":{"title":"1.4.0 JSX and Analytics!","permalink":"/Telegraph/blog/release 1.4.0"},"nextItem":{"title":"1.1.0 is here!","permalink":"/Telegraph/blog/release 1.1.0"}},"content":"Version 1.2 was missed due to releasing issue.\\n\\nThe new telegraph component was landed and available on [`npm.js`](https://npmjs.com) site.\\n\\n## [fmt](https://github.com/vitalics/telegraph/packages/fmt/)\\n\\nThis is not actually a \\"component\\" but it includes helpful formatting\\n\\nInstallation:\\n\\n`npm i @tlgr/fmt`\\n\\nHow it works:\\n\\n```jsx title=example.ts\\nimport { fmt, bold } from \\"@tlgr/fmt\\";\\nimport { Telegraf } from \\"telegraf\\";\\n\\nconst bot = new Telegraf(\\"<API TOKEN>\\");\\n\\nbot.start((ctx) => {\\n  // send message\\n  ctx.reply(...fmt(`Hello with ${bold(\\"bold\\")} message`)); // hello with bold message\\n});\\n\\nbot.launch();\\n```\\n\\nFull Changelog available at link: https://github.com/vitalics/Telegraph/blob/main/releases/v1.3.0.md\\n\\nMade with \u2764\ufe0f from [vitalics](https://github.com/vitalics)"},{"id":"release 1.1.0","metadata":{"permalink":"/Telegraph/blog/release 1.1.0","editUrl":"https://github.com/vitalics/telegraph/tree/main/packages/docs/blog/2022-08-14/index.mdx","source":"@site/blog/2022-08-14/index.mdx","title":"1.1.0 is here!","description":"The new telegraph components are landed and available on npm.js site.","date":"2022-08-14T00:00:00.000Z","formattedDate":"August 14, 2022","tags":[{"label":"release","permalink":"/Telegraph/blog/tags/release"},{"label":"telegraph","permalink":"/Telegraph/blog/tags/telegraph"},{"label":"carousel","permalink":"/Telegraph/blog/tags/carousel"},{"label":"poll","permalink":"/Telegraph/blog/tags/poll"},{"label":"quiz","permalink":"/Telegraph/blog/tags/quiz"}],"readingTime":0.535,"hasTruncateMarker":false,"authors":[{"name":"Vitali Haradkou","title":"Maintainer of Telegraph","url":"https://github.com/vitalics","imageURL":"https://github.com/vitalics.png","key":"vitalics"}],"frontMatter":{"slug":"release 1.1.0","title":"1.1.0 is here!","authors":["vitalics"],"tags":["release","telegraph","carousel","poll","quiz"]},"prevItem":{"title":"1.3.0 is here!","permalink":"/Telegraph/blog/release 1.3.0"},"nextItem":{"title":"1.0.0 is here!","permalink":"/Telegraph/blog/release 1.0.0"}},"content":"The new telegraph components are landed and available on [`npm.js`](https://npmjs.com) site.\\n\\n## New Components:\\n\\n### [Carousel](https://github.com/vitalics/telegraph/packages/carousel/)\\n\\nrender item and navigation (`<` and `>`) symbols.\\n\\nCan render `text` , `video`, `audio`, `animation` and `photo` messages.\\n\\nInstallation:\\n\\n`npm i @tlgr/carousel`\\n\\n### [Poll](https://github.com/vitalics/telegraph/packages/poll/)\\n\\nPoll ask user to answer a question.\\n\\nInstallation:\\n\\n`npm i @tlgr/poll`\\n\\n### [Quiz](https://github.com/vitalics/telegraph/packages/poll/)\\n\\nQuiz is similar to poll but have `correct_option_id` which marks correct answer id.\\n\\nInstallation:\\n\\n`npm i @tlgr/quiz`\\n\\n## Changes\\n\\n### [Button](https://github.com/vitalics/telegraph/packages/button)\\n\\nIntroduce button keyboard component.\\n\\nNew Keyboard buttons. See [types](https://vitalics.github.io/Telegraph/docs/tutorial/button/types):\\n\\n- location\\n- phone\\n- poll\\n- quiz\\n\\n### [Component](https://github.com/vitalics/telegraph/packages/component)\\n\\nNew Component: Keyboard\\n\\n\\nFull Changelog available at link: https://github.com/vitalics/Telegraph/blob/main/releases/v1.1.0.md\\n\\nMade with \u2764\ufe0f from [vitalics](https://github.com/vitalics)"},{"id":"release 1.0.0","metadata":{"permalink":"/Telegraph/blog/release 1.0.0","editUrl":"https://github.com/vitalics/telegraph/tree/main/packages/docs/blog/2022-08-03/index.mdx","source":"@site/blog/2022-08-03/index.mdx","title":"1.0.0 is here!","description":"Finally i made up common components for Telegram. Currently there is not a lot of components:","date":"2022-08-03T00:00:00.000Z","formattedDate":"August 3, 2022","tags":[{"label":"release","permalink":"/Telegraph/blog/tags/release"},{"label":"telegraph","permalink":"/Telegraph/blog/tags/telegraph"}],"readingTime":0.4,"hasTruncateMarker":false,"authors":[{"name":"Vitali Haradkou","title":"Maintainer of Telegraph","url":"https://github.com/vitalics","imageURL":"https://github.com/vitalics.png","key":"vitalics"}],"frontMatter":{"slug":"release 1.0.0","title":"1.0.0 is here!","authors":["vitalics"],"tags":["release","telegraph"]},"prevItem":{"title":"1.1.0 is here!","permalink":"/Telegraph/blog/release 1.1.0"}},"content":"Finally i made up common components for Telegram. Currently there is not a lot of components:\\n\\n- [button](https://github.com/vitalics/telegraph/packages/button/)\\n- [date-picker](https://github.com/vitalics/telegraph/packages/date-picker/)\\n\\n## Date picker demo\\n\\nSee the video below:\\n\\n<video width=\\"600\\" controls autoPlay>\\n  <source src=\\"/videos/day-picker-example.ogg\\" type=\\"video/ogg\\" />\\n</video>\\n\\n## Installation\\n\\n### Button\\n\\npnpm:\\n\\n```bash\\npnpm add @tlgr/button@1.0.0\\n```\\n\\nyarn:\\n\\n```bash\\nyarn add @tlgr/button@1.0.0\\n```\\n\\nnpm:\\n\\n```bash\\nnpm i @tlgr/button@1.0.0\\n```\\n\\n### Date Picker\\n\\npnpm:\\n\\n```bash\\npnpm add @tlgr/date-picker@1.0.0\\n```\\n\\nyarn:\\n\\n```bash\\nyarn add @tlgr/date-picker@1.0.0\\n```\\n\\nnpm:\\n\\n```bash\\nnpm i @tlgr/date-picker@1.0.0\\n```"}]}')}}]);