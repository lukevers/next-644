'use client';

import ServerExample from "./SharedServerExample";

export default function ClientImportsOwnServer() {
  return (
    <button onClick={async () => console.log('ClientImportsOwnServer', await ServerExample('hi'))}>client importing shared server action: I will break</button>
  )
}