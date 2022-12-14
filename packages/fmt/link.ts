import { decorateTag } from './util';

/**
 * @deprecated use `string` module instead
 * 
 * Returns telegram link representation
 *
 * @export
 * @param {(string | URL)} url URL to show
 * @param {string} [name=''] Link name. If present - hide link under the text.
 * @return {*} telegram link string
 */
export default function link<Name extends string, Url extends URL | string>(url: Url, name?: Name) {
  const parsed = new URL(url.toString());
  return decorateTag(`${name || ''}||${parsed.toString()}`, 'link')
}
