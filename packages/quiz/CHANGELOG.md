# @tlgr/quiz

## 1.4.3

### Patch Changes

- ## core

  - add fig auto completion for developing purpure and speed up dev experience

  ## packages

  [@tlgr/fmt]

  - create JSX components and place in `react` folder
  - create copy of fmt components and placed in `string` folder
  - mark default, html, common, markdown fmt as deprecated.

  [@tlgr/fig]

  - init fig package and mark them as private(non pushable)

  [@tlgr/quiz]

  - fix missing build command

- Updated dependencies
  - @tlgr/component@1.4.3

## 1.4.2

### Patch Changes

-

- Updated dependencies
  - @tlgr/component@1.4.2

## 1.4.1

### Patch Changes

- ## core

  - add release log for new releases

  ## packages

  [@tlgr/docs]

  - Add one more limitation about using JSX

  [@tlgr/fmt]

  - replace children properties from common components to another properties.

- Updated dependencies
  - @tlgr/component@1.4.1

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

### Patch Changes

- Updated dependencies
  - @tlgr/component@1.4.0

## 1.3.1

### Patch Changes

- [@tlgr/fmt]

  - add readme file
  - update wrong homepage link in package.json file

- Updated dependencies
  - @tlgr/component@1.3.1

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

### Patch Changes

- Updated dependencies
  - @tlgr/component@1.3.0

## 1.1.0

### Minor Changes

-

### Patch Changes

- Updated dependencies
  - @tlgr/component@1.2.0

## 1.0.19

### Patch Changes

- ## core

  Fix missing packages for releases

- Updated dependencies
  - @tlgr/component@1.1.1

## 1.0.18

### Patch Changes

- Updated dependencies
  - @tlgr/component@1.1.0
