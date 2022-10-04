import { decorateTag } from './util';

/**
 * @deprecated use `string` module instead
 * 
 * Marks string as ~~strikethrough~~.
 *
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} telegram strikethrough text.
 */
export default function strikethrough<S extends string>(str: S | TemplateStringsArray) {
  return decorateTag(str, 'strikethrough');
}