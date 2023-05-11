'use client';

import ServerExample2 from "./ServerExample2";

export default function ClientImportsOwnServer() {
  return (
    <button onClick={async () => console.log('ClientImportsOwnServer', await ServerExample2('hi'))}>client importing own server action: I will break</button>
  )
}