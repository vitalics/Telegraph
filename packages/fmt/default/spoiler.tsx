import { h } from 'preact';

type Props = {
  children: string;
};

/**
 * @deprecated use `react` module instead
 * 
 */
export default function ({ children }: Props) {
  // @ts-ignore
  return <tg-spoiler>{children}</tg-spoiler>
}
