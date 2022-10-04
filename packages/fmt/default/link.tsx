import { h } from 'preact';
import { MessageEntity } from 'telegraf/typings/core/types/typegram';

type Props = {
  children?: string;
  url: string | URL;
};
/**
 * @deprecated use `react` module instead
 * 
 */
export default function (props: Props) {
  const url = props.url.toString();

  return <link>{props.children || ''}||{url}</link>
}
