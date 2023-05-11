'use client';

import ServerExample from "./ServerExample2";

export default function ClientImportsOwnServer() {
  return (
    <button onClick={async () => alert(await ServerExample('hi'))}>client importing own server action: I will break</button>
  )
}