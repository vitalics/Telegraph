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
export class Event<Name extends string = string, Payload extends any[] = unknown[]> {
  readonly payload: Payload;
  constructor(readonly name: Name, ...arr: Payload) {
    this.payload = arr;
  }
}
