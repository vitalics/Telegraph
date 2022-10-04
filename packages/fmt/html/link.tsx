import { h } from 'preact';

/**
 * @deprecated use `react` module instead
 */
export default function (url: string | URL, name?: string) {
  const link = url.toString();
  return <a href={link}>{name ?? link}</a>
}
