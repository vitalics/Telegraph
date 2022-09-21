import { Plugin } from './types';
import Stream, { Options } from './stream';

/**
 * Analytics plugin which writes any event to `stdout` aka `console.log`.
 *
 * @export
 * @class Console
 * @extends {Stream}
 * @implements {Plugin}
 */
export default class Console extends Stream implements Plugin {
  constructor(readonly options?: Readonly<Options>) {
    super(process.stdout, options);
  }
  readonly name = 'console';
  get [Symbol.toStringTag]() {
    return 'Console';
  } 
};
