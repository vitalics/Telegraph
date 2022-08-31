import EventEmitter2 from 'eventemitter2';

import { Telegraf } from 'telegraf';

import { Event } from './event';
import { ToObject, InferObject, RestForArrayType, Payload } from './types';

/**
 * Common component builder.
 * 
 * **NOTE**: This component have not `render()` function. Use `InlineComponent` instead.
 *
 * @export
 * @abstract
 * @class Component
 * @template Events events tuple. e.g. `[Click, Submit]` etc.
 * @template EventsCollection do not override. This is helper.
 */
export default class Component<Events extends Event[] = [], EventsCollection = ToObject<Events>> {
  protected readonly emitter = new EventEmitter2({ delimiter: ':', wildcard: true, verboseMemoryLeak: true });
  constructor(readonly bot: Telegraf) { }

  /**
   * Subscribes to exact event by name and executes function
   *
   * @template Name
   * @template Payload
   * @param {Name} event
   * @param {(...payload: RestForArrayType<Payload>) => void} listener
   * @return {*}  {EventEmitter}
   * @memberof Component
   */
  on<Name extends string | keyof EventsCollection = keyof EventsCollection, Payload = InferObject<EventsCollection, Name>>(event: Name, listener: (...payload: RestForArrayType<Payload>) => void) {
    this.emitter.on(event.toString(), (...args) => {
      listener(...args as any);
    });
    return this;
  }
  /**
   * Subscribe on any event
   *
   * @param {(eventName: string, ...args: any[]) => void} listener
   * @memberof Component
   */
  any(listener: (eventName: string, ...args: any[]) => void) {
    this.emitter.onAny(function (event, value) {
      if (Array.isArray(event)) {
        event.forEach(e => {
          listener(e, value);
        })
        return;
      }
      listener(event, value);
      return;
    });
  }
  once<Name extends keyof EventsCollection = keyof EventsCollection, Payload = InferObject<EventsCollection, Name>>(event: Name, listener: (...payload: RestForArrayType<Payload>) => void) {
    this.emitter.once(event.toString(), (...args) => {
      listener(...args as any);
    });
    return this;
  }
  emit(event: Event | Events[number]): boolean {
    return this.emitter.emit(event.name, ...event.payload)
  }

  /**
   * Unsubscribe to all events
   *
   * @return {*}  {this}
   * @memberof Component
   */
  cleanup(): this;
  /**
   * unsubscribe to one event by name
   *
   * @param {(string)} [event] event name
   * @param {(boolean)} [force] if `true` also remove trigger `all` listener
   * @return {*} 
   * @memberof Component
   */
  cleanup(event: string, force?: boolean): this;
  /**
   * unsubscribe to exact event
   *
   * @param {(Event | Events[number])} event
   * @param {(boolean)} [force] if `true` also remove trigger `all` listener
   * @return {*}  {this}
   * @memberof Component
   */
  cleanup(event: Event | Events[number], force?: boolean): this;
  cleanup(event?: Event | Events[number] | string, force = false): this {
    if (event) {
      if (typeof event === 'string') {
        const fns = this.emitter.listeners(event);
        fns.forEach(fn => {
          if (force) {
            this.emitter.offAny(fn);
          }
          this.emitter.removeListener(event, fn)
        });
        return this;
      }
      const fns = this.emitter.listeners(event.name);
      fns.forEach(fn => {
        if (force) {
          this.emitter.offAny(fn);
        }
        this.emitter.removeListener(event.name, fn)
      });
      return this;
    }
    this.emitter.removeAllListeners();
    return this;
  }
}
