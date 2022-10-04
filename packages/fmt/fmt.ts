import { MessageEntity } from 'telegraf/typings/core/types/typegram';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';
import { format } from 'util';

import { ParsePrintFormat } from './types';
import { replaceAt } from './util';

type Decorations = Extract<
  MessageEntity.CommonMessageEntity['type'],
  'spoiler' | 'underline' | 'code' | 'bold' | 'italic' | 'strikethrough' | 'url'>;
// ENUM type decoration -> tag name
const tagTypes: Record<Decorations, string> = {
  spoiler: 'tg-spoiler',
  underline: 'u',
  code: 'code',
  bold: 'b',
  italic: 'i',
  strikethrough: 's',
  url: 'link',
};

const types = Object.keys(tagTypes) as (keyof typeof tagTypes)[];

/**
 * @deprecated use `string` module instead
 * 
 * The `fmt()` method returns a formatted string using the first argument as a printf-like format string which can contain zero or more format specifiers. Each specifier is replaced with the converted value from the corresponding argument. Supported specifiers are:
 * 
 * If a specifier does not have a corresponding argument, it is not replaced:
 * ``` ts
 * util.format('%s:%s', 'foo');
 * // Returns: 'foo:%s'
 * ```
 * 
 * If there are more arguments passed to the `fmt()` method than the number of specifiers, the extra arguments are concatenated to the returned string, separated by spaces:
 * ``` ts
 * util.format('%s:%s', 'foo', 'bar', 'baz');
 * // Returns: 'foo:bar baz'
 * ```
 * 
 * If only one argument is passed to `ftm()`, it is returned as it is without any formatting:
 * ``` ts
 * util.format('%% %s');
 * // Returns: '%% %s'
 * ```
 * `fmt()` is a synchronous method that is intended as a debugging tool. Some input values can have a significant performance overhead that can block the event loop. Use this function with care and never in a hot code path.
 *
 * @template S string generic
 * @template A format arguments
 * @param {S} str string
 * @param {...A} args format arguments
 * @return {*}  {string} formatted string.
 */
export default function fmt<S extends string>(str: S | TemplateStringsArray, ...args: ParsePrintFormat<S>): [string, ExtraReplyMessage] {
  const entities: MessageEntity[] = [];

  let text = format(str, ...args);
  for (const type of types) {
    const tag = tagTypes[type];
    let haveTag = text.includes(`<${tag}>`);
    if (haveTag) {
      text = fmtOnce(text, type, entities);
      while (haveTag) {
        text = fmtOnce(text, type, entities);
        haveTag = text.includes(`<${tag}>`);
      }
    } else {
      // no op
    }
  }

  return [text, { entities }];
}

function fmtOnce(str: string, type: keyof typeof tagTypes, entities: MessageEntity[] = []): string {
  const tag = tagTypes[type];
  const strForRegex = `<${tag}>(.*?)</${tag}>`
  const strForRegexExcludeTag = `(?<=<${tag}>)(.*?)(?=</${tag}>)`;
  const regex = new RegExp(strForRegex, 'igm');
  const regexExcludeTag = new RegExp(strForRegexExcludeTag, 'igm')

  const exec = regex.exec(str);
  if (exec !== null && Array.isArray(exec)) {
    const matched = exec[0];
    const contentLength = matched.length;
    const startedIndex = exec.index; // started index
    const textToReplace = regexExcludeTag.exec(matched);
    if (type === 'url') {
      const [name, url] = textToReplace![0].split('||');
      let replaced = '';
      if (name) {
        replaced = replaceAt(str, startedIndex, startedIndex + contentLength, name);
        entities.push({
          length: name.length, type: 'text_link', offset: startedIndex, url,
        });
        return replaced;
      } else {
        replaced = replaceAt(str, startedIndex, startedIndex + contentLength, url);
        entities.push({
          length: textToReplace![0].length, type, offset: startedIndex,
        });
      }
      return replaced;
    } else if (type === 'code') {
      const [language, snippet] = textToReplace![0].split('||');
      const replaced = replaceAt(str, startedIndex, startedIndex + contentLength, snippet);

      if (language) {
        entities.push({
          length: snippet.length, type: 'pre', offset: startedIndex, language
        });
      } else {
        entities.push({
          length: snippet.length, type: 'code', offset: startedIndex
        });
      }
      return replaced;
    } else {
      const replaced = replaceAt(str, startedIndex, startedIndex + contentLength, textToReplace![0]);
      entities.push({
        length: textToReplace![0].length, type, offset: startedIndex,
      });
      return replaced;
    }
  }
  return str;
}
