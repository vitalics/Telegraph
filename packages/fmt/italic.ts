import { decorate } from './util';

/**
 * Marks text _italic_.
 *
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} 
 */
export default function italic<S extends string>(str: S | TemplateStringsArray) {
  return decorate(str, 'i')
}
