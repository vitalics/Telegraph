import { h } from 'preact';

export type Props = {
  children: string;
};

/** __Bold__ component */
export default function ({ children }: Props) {
  return <b>{children}</b>
};
