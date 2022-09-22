import { Fragment, h, JSX } from 'preact';

type Props = {
  name: string;
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
export default function ({ name }: Props) {
  return <Fragment>/{name}</Fragment>
}
