type HaveSpaces<S extends string> = S extends `${string} ${string}` ?  true : false;

type Props<S extends string> = {
  /**
   * Username cannot contains spaces(` `)
   *
   * @type {HaveSpaces<S> extends true ? never : S}
   */
  username: HaveSpaces<S> extends true ? never : S;
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
export default function Mention<S extends string>({ username }: Props<S>) {
  return <>@{username}</>;
}
