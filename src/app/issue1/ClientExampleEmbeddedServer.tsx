'use client';

interface Props {
  action: (message: string) => Promise<string>;
}

export default function ClientExampleEmbeddedServer(props: Props) {
  return (
    <button onClick={async () => console.log('ClientExampleEmbeddedServer', await props.action('hi'))}>client passed with own server action as prop: I will log</button>
  )
}