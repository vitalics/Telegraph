import { h, JSX } from 'preact';

export type Props = {
  children: string | JSX.Element;
};

/** HTML __Bold__ component */
export default function ({ children }: Props) {
  return <b>{children}</b>
};
