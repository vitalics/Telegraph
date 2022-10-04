import { h, JSX } from 'preact';

type Props = {
  children: string | JSX.Element
};
/**
 * @deprecated use `react` module instead
 * 
 */
export default function ({ children }: Props) {
  return <span className='tg-spoiler'>{children}</span>;
}
