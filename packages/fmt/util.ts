import parse from 'node-html-parser';
import { JSX } from 'preact';
import render from 'preact-render-to-string';

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
export function decorateTag<
  S extends string,
  Tag extends string,
>(s: S | TemplateStringsArray, tag: Tag): Wrap<S, `<${Tag}>`, `</${Tag}>`> {
  return decorate(s, `<${tag}>`, `</${tag}>`)
}

/**
 * Wrap string to item which will be used for parsing
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
  Left extends string,
  Right extends string = Left
>(s: S | TemplateStringsArray, left: Left, right: Right = left as any): Wrap<S, Left, Right> {
  return `${left}${s}${right}` as Wrap<S, Left, Right>;
}


export function replaceAt(s: string, start: number, end: number, replacement: string) {
  return s.substring(0, start) + replacement + s.substring(end);
}

export function toHtml(element: JSX.Element) {
  const el = render(element);
  const html = parse(el);
  return html;
}