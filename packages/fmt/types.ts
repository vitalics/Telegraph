
export type WrapLeft<S extends string, Symbol extends string> = `${Symbol}${S}`;
export type WrapRight<S extends string, Symbol extends string> = `${S}${Symbol}`;
export type Wrap<S extends string, Start extends string, End extends string | Start = Start> = `${Start}${S}${End}`;



// Formatter types.
type ControlsMap = {
  o: Record<string, unknown> | readonly unknown[];
  O: Record<string, unknown> | readonly unknown[];
  d: number; // decimal
  i: number; // int
  f: number; // float
  s: string;
}

/**
 * Inspired from type challange
 * @link https://github.com/type-challenges/type-challenges/blob/master/questions/147-hard-c-printf-parser/README.md
 * @link https://github.com/type-challenges/type-challenges/issues/1443
 */
export type ParsePrintFormat<S extends string,
  A extends ControlsMap[keyof ControlsMap][] = []> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  S extends `${infer _}%${infer Control}${infer Last}` ?
  Control extends keyof ControlsMap ?
  ParsePrintFormat<Last, [...A, ControlsMap[Control]]> :
  ParsePrintFormat<Last, A>
  : A;
