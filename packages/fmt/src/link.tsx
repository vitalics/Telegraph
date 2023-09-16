type Props = {
  url: string | URL;
  name?: string;
}

/** 
 * Returns HTML link representation
 */
export default function (props: Props) {
  const link = props.url.toString();
  return <a href={link}>{props.name ?? link}</a>
}
