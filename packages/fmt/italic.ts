import { decorateTag } from './util';

/**
 * @deprecated use `string` module instead
 * 
 * Marks text _italic_.
 *
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} 
 */
export default function italic<S extends string>(str: S | TemplateStringsArray) {
  return decorateTag(str, 'i')
}
