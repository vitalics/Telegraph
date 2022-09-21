import { h } from 'preact';

type Props = {
  children: string;
};

export default function ({ children }: Props) {
  // @ts-ignore
  return <tg-spoiler>{children}</tg-spoiler>
}
