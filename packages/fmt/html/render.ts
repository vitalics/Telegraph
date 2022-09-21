import { render as toString } from 'preact-render-to-string';
import { JSX, VNode } from 'preact';

export default function render(root: JSX.Element | VNode) {
  return toString(root);
}
