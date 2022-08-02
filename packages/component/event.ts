/**
 * Custom event.
 * 
 * Event should provide `name` and `payload`field
 *
 * @export
 * @class Event
 * @template Payload tuple. E.g. `[string, number, boolean, object]` or named tuple `[text: string, etc.]`
 * @template Name Event name
 */
export class Event<Payload extends any[] = unknown[], Name extends string = string> {
  readonly payload: Payload;
  constructor(readonly name: Name, ...arr: Payload) {
    this.payload = arr;
  }
}
