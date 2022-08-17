import { decorate } from './util';

/**
 * Command returns string with sigh `/`.
 * 
 * **NOTE**: string should be as one word.
 *
 * 
 * @example
 * command('some_command') // works, returns /some_command
 * command('some long text') // does not works, returns /some long text
 * @export
 * @template S
 * @param {(S)} str command name
 * @return {*} string
 */
export default function command<S extends string>(str: S): `<command>/${S}</command>` {
  return decorate(`/${str}`, 'command') as `<command>/${S}</command>`
}
