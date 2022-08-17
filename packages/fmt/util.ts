import { Wrap } from './types';

/**
 * Wrap string to telegram tag which will be used for parsing
 *
 * @export
 * @template S
 * @template Symbol
 * @param {(S | TemplateStringsArray)} s
 * @param {Symbol} symbol
 * @return {*}  {Wrap<S, Symbol>}
 */
export function decorate<
  S extends string,
  Tag extends string,
>(s: S | TemplateStringsArray, tag: Tag): Wrap<S, `<${Tag}>`, `</${Tag}>`> {
  return `<${tag}>${s}</${tag}>` as Wrap<S, `<${Tag}>`, `</${Tag}>`>;
}

export function replaceAt(s: string, start: number, end: number, replacement: string) {
  return s.substring(0, start) + replacement + s.substring(end);
}
