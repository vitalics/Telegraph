import { decorateTag } from './util';

/**
 * @deprecated use `string` module instead
 * 
 * Creates `code` snippet.
 *
 * @export
 * @template S
 * @param {S} str code string.
 * @param language code language.
 * @return {*} telegram code snippet
 */
export default function code<S extends string>(str: S, language: string = '') {
  return decorateTag(`${language}||${str}`, 'code');
}
