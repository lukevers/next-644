import Link from "next/link";

import ClientExampleEmbeddedServer from "./ClientExampleEmbeddedServer"
import ClientImportsOwnServer from "./ClientImportsOwnServer";
import ServerExample from "./SharedServerExample"

export default function Page() {
  return (
    <div>
      <p>The issue here is that when we access cookies through a server component imported from a client commponent, it does not work. It also does not work even if it was passed through to the client component if the server component is the same component.</p>
      <ClientExampleEmbeddedServer action={ServerExample}/>
      <ClientImportsOwnServer />
      <p>
        <Link href="/issue1">See issue 1</Link>
      </p>
    </div>
  )
}
