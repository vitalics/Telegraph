# @tlgr/fmt

## 1.4.0

### Minor Changes

- ## core

  - add analytics in release script

  ## packages

  [@tlgr/analytics]

  - implement analytics component.
  - implement Stream, File and Console plugins

  [@tlgr/docs]

  - add docs for fmt package.
  - add docs for analytics package.

  [@tlgr/component]

  - add `any` event.
  - migrate from node.js native event emitter to [`eventemitter2`](https://github.com/EventEmitter2/EventEmitter2) package.

  [@tlgr/date-picker]

  - add "lib" folder to exclude path for `tsconfig.json` file.

  [@tlgr/fmt]

  - add JSX support for `reply`, `replyWithHTML` and `replyWithMarkdownV2`
  - update `tsconfig.json` file
  - update README.MD file

## 1.3.1

### Patch Changes

- [@tlgr/fmt]

  - add readme file
  - update wrong homepage link in package.json file

## 1.3.0

### Minor Changes

- ## core

  - update release script.
  - migrate linking from release.mjs to changeset config file
  - ignore tests files

  ## packages

  [@tlgr/poll]

  - update version in package.json

  [@tlgr/quiz]

  - update version in package.json

  [@tlgr/fmt]

  - implement formatter functionality for reply message.
  - implement `bold`, `cash`, `code`, `command`, `email`, `hash`, `italic`, `link`, `mention`, `phone`, `spoiler`, `strikethrough` and `underline`
  - implement tests for `fmt`, `bold` and `cash` functions