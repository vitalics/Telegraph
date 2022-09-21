import { Event } from '@tlgr/component';

type EventName = `analytics:${string}`;

export default class Analytics extends Event<`analytics:${string}`>{
  constructor(name: string, ...args: any[]) {
    super(`analytics:${name.toLowerCase()}` as EventName, ...args);
  }
}
