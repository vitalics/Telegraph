import { Event } from './event';

// Event Collection helpers
type IndexKeys<A extends readonly unknown[]> = Exclude<keyof A, keyof []>
type GetEventName<O> = O extends { name: infer N } ? N extends string ? N : never : never;
type GetPayload<O> =
  O extends Event<infer _, infer Payload>
  ? Payload
  : never // object has no `type` property

/** 
 * Converts Event tuple to object.
 * 
 * Object used to find exact event name and payload for subscribe functions like `on` or `once`
 * @example
 * type Click = Event<'click', [someData: string]>;
 * type Close = Event<'close', [anotherData: string]>
 * type Events = [Click, Close];
 * type MappedEvents = ToObject<Events>; 
 * // MappedEvents = {
 * // click: [someData: string], 
 * // close: [anotherData: string]
 * // }
 */
export type ToObject<P extends readonly Event[]> = {
  [K in IndexKeys<P> as GetEventName<P[K]>]: GetPayload<P[K]>
}

export type InferObject<O extends Record<string, any>, Key extends string | keyof O = keyof O> = Key extends keyof O ? Pick<O, Key>[Key] : never;

export type RestForArrayType<T> = T extends any[] ? T : [T];

/** Payload type */
export type Payload = PropertyKey | boolean;
