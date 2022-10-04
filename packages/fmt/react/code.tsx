import { h, JSX } from 'preact';

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

/** Generic Code block component */
export default ({ children, type, language }: Props) => {
  const mode = type ?? 'inline';
  const lang = language ?? '';
  return (
    mode === 'inline'
      ? <code>{children}</code>
      : lang === '' ?
        <pre>{children}</pre> :
        <pre className={`language-${lang}`}>{children}</pre>
  )
}
