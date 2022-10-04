import { h } from 'preact';

export default function (url: string | URL, name?: string) {
  const link = url.toString();
  return <a href={link}>{name ?? link}</a>
}
