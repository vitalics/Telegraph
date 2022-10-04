import { decorateTag } from './util';

/**
 * Makes text underline.
 * @deprecated use `string` module instead
 *
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} 
 */
export default function underline<S extends string>(str: S | TemplateStringsArray) {
  return decorateTag(str, 'u');
}
