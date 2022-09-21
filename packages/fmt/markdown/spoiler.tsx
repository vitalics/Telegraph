import { Fragment, h, JSX } from 'preact';

type Props = {
  children: string | JSX.Element;
};

export default function ({ children }: Props) {
  return <Fragment>||{children}||</Fragment>;
}
