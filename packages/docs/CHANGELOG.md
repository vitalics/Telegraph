# @tlgr/docs

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

## 1.2.0

### Minor Changes

-

## 1.1.1

### Patch Changes

- ## core

  Fix missing packages for releases

## 1.1.0

### Minor Changes

- ## core

  add missing licenses.

  update root level `tsconfig.json` file.

  ## packages

  [@tlgr/component]

  [@tlgr/button]

  Add button keyboard components: location, phone, poll, quiz.

  Put demo to assets folder.

  [@tlgr/carousel]

  New Component.

  Have events: `next`, `prev`, `sent`, `error`.

  [@tlgr/component]

  Update event name matching type for better typescript auto completion.

  [@tlgr/date-picker]

  update button usage from `Button` to `InlineButton`

  [@tlgr/docs]

  New blog post

  Add docs for date-picker, button, poll, quiz packages.

  Put demo to static folder.

  Update 1.x version.

  [@tlgr/poll]

  New Inline Component. Can fires events `answer_user` or `answer_anonymous`

  [@tlgr/quiz]

  New Inline Component. Can fires events `answer_user` or `answer_anonymous`

## 1.0.5

### Patch Changes

-

## 1.0.4

### Patch Changes

-

## 1.0.3

### Patch Changes

-

## 1.0.2

### Patch Changes

-

## 1.0.1

### Patch Changes

- [infra/core]

  - add in release script `@tlgr/docs` package.

  [@tlgr/component]

  - update event generics API.
  - moved `payload` property from `InlineComponent` to `Component` class.

  [@tlgr/button]

  - update event usage

  [@tlgr/date-picker]

  - update event usage.

  [@tlgr/docs]

  - add docs about `component`, `date-picker` and `button` components.
