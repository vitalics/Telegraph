import { h } from 'preact';

export type Props = {
  children: string;
};

/** 
 * @deprecated use `react` module instead
 * _Italic_ component */
export default function ({ children }: Props) {
  return <i>{children}</i>
};
