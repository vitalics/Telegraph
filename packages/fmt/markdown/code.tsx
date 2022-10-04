/** @jsx h */
import { Fragment, h, JSX } from 'preact';
import Break from '../common/break';

type Props = {
  children: JSX.Element | string;
  type?: 'inline' | 'multiline';
  /**
   * Markdown language
   * @example
   * 'python' or 'js'
   *
   * @type {string}
   */
  language?: string;
};

/** 
 * Generic Code block component 
 * @deprecated
 * use `react` module instead
 * */
export default ({ children, type, language }: Props) => {
  const mode = type ?? 'inline';
  const lang = language ?? '';
  return (
    mode === 'inline'
      ? <Fragment>`{children}`</Fragment>
      : <Fragment>
        ``` {lang ?? ''}
        <Break />
        {children}
        <Break />
        ```
      </Fragment>
  )
}
