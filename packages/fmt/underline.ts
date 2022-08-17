import { decorate } from './util';

/**
 * Makes text underline.
 *
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} 
 */
export default function underline<S extends string>(str: S | TemplateStringsArray) {
  return decorate(str, 'u');
}
