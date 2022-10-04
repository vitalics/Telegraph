import { Fragment, h, JSX } from 'preact';

type Props = {
  children: string | JSX.Element;
};

/**
 * @deprecated use `react` module instead
 * 
 */
export default function ({ children }: Props) {
  return <Fragment>||{children}||</Fragment>;
}
