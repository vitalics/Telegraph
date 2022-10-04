import { h } from 'preact';

export type Props = {
  children: string;
};

/** 
 * @deprecated use `react` module instead
 * __Bold__ component
 */
export default function ({ children }: Props) {
  return <b>{children}</b>
};
