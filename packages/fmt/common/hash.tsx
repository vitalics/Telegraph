import { Fragment, h, JSX } from 'preact';

type Props = {
  hash: string;
};

export default function ({ hash }: Props) {
  return <Fragment>#{hash}</Fragment>;
}
