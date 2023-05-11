'use client';

import ServerExample from "./ServerExample2";

export default function ClientImportsOwnServer() {
  return (
    <button onClick={async () => alert(await ServerExample('hi'))}>I am going to break</button>
  )
}