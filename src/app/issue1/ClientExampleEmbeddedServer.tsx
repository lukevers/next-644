'use client';

interface Props {
  action: (message: string) => Promise<string>;
}

export default function ClientExampleEmbeddedServer(props: Props) {
  return (
    <button onClick={async () => alert(await props.action('hi'))}>client passed with own server action as prop: I will alert</button>
  )
}