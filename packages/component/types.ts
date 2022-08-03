import { Event } from './event';

// Event Collection helpers
type IndexKeys<A extends readonly unknown[]> = Exclude<keyof A, keyof []>
type Name<O> = O extends { name: infer N } ? N extends string ? N : never : never;
type GetPayload<O> =
  O extends Event<infer P>
  ? P
  : never // object has no `type` property

export type ToObject<P extends readonly Event[]> = {
  [K in IndexKeys<P> as Name<P[K]>]: GetPayload<P[K]>
}

export type InferObject<O extends Record<string, any>, Key extends string | keyof O = keyof O> = {
  [K in keyof O as Key]: O[K];
}[Key extends keyof O ? Key : never];
// type GetEventByName<EventName extends string, Events extends readonly unknown[]> = Events extends [Event<infer payload, infer Name>] ? Name extends EventName?

export type RestForArrayType<T> = T extends any[] ? T : [T];