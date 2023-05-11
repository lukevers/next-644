'use client';

interface Props {
  action: (message: string) => Promise<string>;
}

export default function ClientExampleEmbeddedServer(props: Props) {
  return (
    <button onClick={async () => alert(await props.action('hi'))}>I should alert</button>
  )
}