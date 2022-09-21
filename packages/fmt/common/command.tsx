import { Fragment, h, JSX } from 'preact';

type Props = {
  children: string | JSX.Element
};

/**
 * Generic Command returns string with sigh `/`.
 * 
 *
 * @example
 * command('some_command') // works, returns /some_command
 * command('some long text') // does not works, returns /some long text
 * @export
 * @template S
 * @param {(S)} str command name
 * @return {*} string
 */
export default function ({ children }: Props) {
  return <Fragment>/{children}</Fragment>
}
