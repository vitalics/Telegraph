import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import { JSX, ReactElement } from 'react';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';

type ExtraReplyMessageOptions = Exclude<ExtraReplyMessage, 'parse_mode'>
/**
 * Accepts JSX element and returns html code as string.
 *
 * NOTE: function used `parse_mode: 'HTML'` for renders, do not override this property
 *
 * @export
 * @param {(JSX.Element | ReactElement)} root JSX Node
 * @param {ExtraReplyMessageOptions} [options] extra reply message option
 * @return {*}  {[string, ExtraReplyMessage]}
 */
export default function render(root: JSX.Element | ReactElement, options?: ExtraReplyMessageOptions): [string, ExtraReplyMessage] {
  const html = renderToStaticMarkup(root);
  return [
    html, {
      parse_mode: 'HTML',
      ...options,
    }
  ]
}
