import { Fragment, h } from 'preact';

type Props = {
  username: string;
};

/** 
 * mention component
 * 
 * Append `@` sign.
 * 
 * @example
 * <Mention username={'some_user_name'}></Mention>
 * // same as '@some_user_name'
 */
export default function ({ username }: Props) {
  return <Fragment>@{username}</Fragment>;
}
