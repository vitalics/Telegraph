import { decorateTag } from './util';

/**
 * @deprecated use `string` module instead
 * 
 * Returns user mention telegram string.
 *
 * @example
 * mention('example_user') // returns '@example_user'
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} User mention. E.g. `@example_user`
 */
export default function mention<S extends string>(str: S | TemplateStringsArray) {
  return decorateTag(`@${str}`, 'mention')
}
