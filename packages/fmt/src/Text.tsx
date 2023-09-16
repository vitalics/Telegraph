import { PropsWithChildren } from 'react';

export function Bold({ children }: PropsWithChildren<{}>) {
  return <b>{children}</b>
}


export function Italic({ children }: PropsWithChildren<{}>) {
  return <i>{children}</i>
}

export function Underline({ children }: PropsWithChildren<{}>) {
  return <u>{children}</u>
}

export function Strikethrough({ children }: PropsWithChildren<{}>) {
  return <s>{children}</s>
}


export function Spoiler({ children }: PropsWithChildren<{}>) {
  return <span className='tg-spoiler'>{children}</span>;
}

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
export function Code({ children, type, language }: Props) {
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

export const Text = {
  Code,
  Underline,
  Spoiler,
  Bold,
  Strikethrough,
  Italic,
}

export default Text;
