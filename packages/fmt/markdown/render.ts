import { JSX } from 'preact';
import { toHtml } from '../util';

/**
 * Returns markdown string from element
 *
 * @export
 * @param {JSX.Element} element
 */
export default function render(element: JSX.Element) {
  return toHtml(element).textContent;
}
