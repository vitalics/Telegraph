/**
 * Plugin API which allows you construct new plugins
 */
 export type Plugin = {
  /**
   * Plugin name.
   * @example
   * const myPlugin = {
   * name: 'myPlugin'
   * }
   *
   * @type {string}
   */
  readonly name: string;
  /**
   * Fires when any event triggered
   *
   * @param {string} event
   * @param {*} param
   */
  listener(event: string, param: any): void;
  /**
   * Triggers when `close` in analytics object called.
   */
  end?(): void;
};
