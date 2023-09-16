type Props = {
  hash: string;
};

export default function ({ hash }: Props) {
  return <>#{hash}</>;
}
