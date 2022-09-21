import { JSX, h } from 'preact';
type Props = {
  children: string | JSX.Element;
};

export default function ({ children }: Props) {
  return <s>{children}</s>;
}
