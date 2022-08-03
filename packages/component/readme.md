# Telegram Common Component Builder

## Installation

[npm](https://www.npmjs.com/)

``` bash
npm install @tlgr/component
```

[yarn](https://yarnpkg.com/)

``` bash
yarn add @tlgr/component
```

[pnpm](https://pnpm.io/)

``` bash
pnpm add @tlgr/component
```

## API

### Component

Each component should extends from `Component`, since this component realize `EventEmitter` from `events` module.

### Inline Component

provides `render()` function which returns `InlineKeyboard` type or array of `inlineKeyboard` type. In this case it will be like grid.

### Event

Custom event emitter. Each component already implements `emit()`, `on()`, `once()`, `cleanup()` functions

usage

``` ts
const MyEvent = new Event('click', 'payload1');
// specify components with events
const component = new MyComponent<[MyEvent]>();

component.on('click', (payload) => {
console.log('payload:', payload);
})

component.emit(MyEvent); // payload: payload1
```
