import { decorate } from './util';

/**
 * @deprecated use `string` module instead
 * 
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} 
 */
export default function bold<S extends string>(str: S | TemplateStringsArray) {
  return decorate(str, 'bold');
}
