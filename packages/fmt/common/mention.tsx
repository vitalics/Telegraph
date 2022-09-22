import { Fragment, h, JSX } from 'preact';

type Props = {
  username: string;
};

/** 
 * Generic mention component
 * 
 * Append to child `@` sign.
 * 
 * @example
 * <Mention>some_user_name</Mention>
 * // same as '@some_user_name'
 */
export default function ({ username }: Props) {
  return <Fragment>@{username}</Fragment>;
}
