import { h, JSX } from 'preact';

type Props = {
  children: string | JSX.Element
};

export default function ({ children }: Props) {
  return <span className='tg-spoiler'>{children}</span>;
}
