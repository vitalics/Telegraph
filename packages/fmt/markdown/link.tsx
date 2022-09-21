import { Fragment, h } from 'preact';

type Props = {
  children?: string;
  url: string | URL;
};

export default function (props: Props) {
  const link = props.url.toString();
  if (props.children) {
    return <Fragment>{`[${props.children}](${link})`}</Fragment>
  }
  return <Fragment>{link}</Fragment>
}
