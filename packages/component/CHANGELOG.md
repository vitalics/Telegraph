# @tlgr/component

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

## 1.0.17

### Patch Changes

-

## 1.0.16

### Patch Changes

-

## 1.0.15

### Patch Changes

-

## 1.0.14

### Patch Changes

-

## 1.0.13

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

## 1.0.12

### Patch Changes

-

## 1.0.11

### Patch Changes

-

## 1.0.10

### Patch Changes

-

## 1.0.9

### Patch Changes

-

## 1.0.8

### Patch Changes

-

## 1.0.7

### Patch Changes

-

## 1.0.6

### Patch Changes

-

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

- ## infra

  - define release script with changeset library
  - define codeql action
  - define [git-lfs](https://git-lfs.github.com/) for videos and images
  - define docs package with docusaurus

  ## packages

  [@tlgr/component](packages/component/)

  - implement base component with events
  - implement inline component as abstract class

  [@tlgr/button](packages/button/)

  - implement inline component

  [@tlgr/date-picker](packages/date-picker/)

  - implement date-picker component with events.
  - add readme.md file
  - add video with demo
