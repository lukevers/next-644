'use client';

interface Props {
  action: (message: string) => Promise<string>;
}

export default function ClientExampleEmbeddedServer(props: Props) {
  return (
    <button onClick={async () => console.log('ClientExampleEmbeddedServer', await props.action('hi'))}>client passed with shared server action: I will break</button>
  )
}