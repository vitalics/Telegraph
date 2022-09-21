import { h } from 'preact';

export type Props = {
  children: string;
};

/** _Italic_ component */
export default function ({ children }: Props) {
  return <i>{children}</i>
};
