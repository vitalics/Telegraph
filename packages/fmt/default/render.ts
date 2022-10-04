import { JSX, VNode } from 'preact';
import toString from 'preact-render-to-string';

import fmt from '../fmt';

/**
 * @deprecated use `react` module instead
 * 
 * The `render()` method returns a formatted string using react-like elements.
 * 
 * it's highly recommended to wrap high-level component to `<Fragment></Fragment>`.
 * 
 * @param node JSX element
 * @return {*}  {string} formatted string.
 */
export default function render(node: VNode | JSX.Element) {
  let text = toString(node);
  return fmt(text);
}
