import { decorate } from './util';

/**
 * mark text as spoiler
 *
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} Telegram spoiler string
 */
export default function spoiler<S extends string>(str: S | TemplateStringsArray) {
  return decorate(str, 'spoiler');
}
