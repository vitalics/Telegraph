import { h } from 'preact';

export type Props = {
  children: string;
  /**
   * code snippet language
   * @example
   * 'python' or 'js'
   *
   * @type {string}
   */
  language?: string;
};

/** 
 * @deprecated use `react` module instead
 * Code component */
export default function (props: Props) {
  return <code>{props.language}||{props.children}</code>
};
