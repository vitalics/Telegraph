import { createWriteStream, PathLike } from 'fs';

import type { Plugin } from './types';
import Stream, { type Options } from './stream';

/**
 * File plugin which writes events to separate file.
 *
 * @export
 * @class File
 * @extends {Stream}
 * @implements {Plugin}
 */
export default class File extends Stream implements Plugin {
  constructor(readonly path: PathLike, readonly options?: Readonly<Options>) {
    super(createWriteStream(path), options);
  }
  [Symbol.toStringTag] = 'File';
  readonly name = 'file';
};
