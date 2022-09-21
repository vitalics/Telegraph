import { Writable } from 'stream';
import { inspect, format } from 'util';
import { EOL } from 'os';

import Console from './console';
import File from './file';

import type { Plugin } from './types';

export type Options = {
  showHidden?: boolean;
  /**
   * Inspect depth
   * 
   * @default 4
   *
   * @type {number}
   */
  depth?: number;
};

/**
 * Stream plugin which allows you to use `writable` stream to print data to somewhere.
 * File and console plugins are already implemented.
 * 
 * @see {@link https://nodejs.org/api/stream.html}
 * @see {@link Console} Plugin or {@link File} Plugin
 * @export
 * @class Stream
 * @implements {Plugin}
 */
export default class Stream implements Plugin {
  constructor(
    readonly stream: Writable,
    readonly options?: Readonly<Options>
  ) { }
  readonly name: string = 'stream';
  get [Symbol.toStringTag]() {
    return 'Stream';
  } 
  listener(event: string, param: any): void {
    const now = new Date().toISOString();
    if (param) {
      const inspectedParam = inspect(param, this.options?.showHidden ?? true, this.options?.depth ?? 4);
      const str = format(`[%s] %s %s%s`, now, event, inspectedParam, EOL);
      this.stream.write(str);
    } else {
      const str = format(`[%s] %s%s`, now, event, EOL);
      this.stream.write(str);
    }
  }
  end() {
    this.stream.end();
  }
};
