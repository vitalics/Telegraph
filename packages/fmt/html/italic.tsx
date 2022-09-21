import { h, JSX } from 'preact';

export type Props = {
  children: string | JSX.Element
};

export default function ({ children }: Props) {
  return <i>{children}</i>;
}
