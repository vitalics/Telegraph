import { EventEmitter } from 'events';

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
export default abstract class Component<Events extends Event[] = [], EventsCollection = ToObject<Events>> {
  /** current component payload */
  get payload(): Payload {
    return this._payload;
  }
  protected _payload: Payload = '';
  protected readonly emitter = new EventEmitter({ captureRejections: true });
  constructor(readonly bot: Telegraf) { }
  on<Name extends string | keyof EventsCollection = keyof EventsCollection, Payload = InferObject<EventsCollection, Name>>(event: Name, listener: (...payload: RestForArrayType<Payload>) => void): EventEmitter {
    return this.emitter.on(event.toString(), (...args) => {
      listener(...args as any);
    });
  }
  once<Name extends keyof EventsCollection = keyof EventsCollection, Payload = InferObject<EventsCollection, Name>>(event: Name, listener: (...payload: RestForArrayType<Payload>) => void): EventEmitter {
    return this.emitter.once(event.toString(), (...args) => {
      listener(...args as any);
    });
  }
  emit(event: Event | Events[number]): boolean {
    return this.emitter.emit(event.name, ...event.payload)
  }
  /** 
   * unsubscribe to all events or one event
   */
  cleanup(event?: Event | Events[number]) {
    if (event) {
      const fns = this.emitter.listeners(event.name) as ((...args: any[]) => void)[];
      fns.forEach(fn => this.emitter.removeListener(event.name, fn));
      return this.emitter;
    }
    return this.emitter.removeAllListeners();
  }
}
