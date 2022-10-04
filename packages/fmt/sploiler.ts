import { decorateTag } from './util';

/**
 * @deprecated use `string` module instead
 * 
 * mark text as spoiler
 *
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} Telegram spoiler string
 */
export default function spoiler<S extends string>(str: S | TemplateStringsArray) {
  return decorateTag(str, 'spoiler');
}
