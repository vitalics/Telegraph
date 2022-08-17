import { decorate } from './util';

/**
 * Marks string as ~~strikethrough~~.
 *
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} telegram strikethrough text.
 */
export default function strikethrough<S extends string>(str: S | TemplateStringsArray) {
  return decorate(str, 'strikethrough');
}