import { Fragment, h, JSX } from 'preact';

type Props = {
  hash: string;
};
/**
 * @deprecated use `react` module instead
 * 
 */
export default function ({ hash }: Props) {
  return <Fragment>#{hash}</Fragment>;
}
