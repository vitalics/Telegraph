import { decorate } from '../util';

/**
 * Returns hashtag string.
 * 
 * In case of many test cases use `hashtags` function
 * @example
 * hashtag('tag1') // #tag1
 * @export
 * @template S
 * @param {(S | TemplateStringsArray)} str
 * @return {*} 
 */
export function hashtag<S extends string>(str: S | TemplateStringsArray) {
  return decorate(`#${str}`, 'hash')
}

/**
 * Represents many hashes and concats it to a simple string joined by empty (` `) string
 *
 * @see {@link hashtag}
 * @export
 * @param {...string[]} hashs
 * @return {*} 
 */
export function hashtags(...hashs: string[]) {
  return hashs.map(hashtag).join(' ');
}
