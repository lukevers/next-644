import Link from "next/link";

import ClientExampleEmbeddedServer from "./ClientExampleEmbeddedServer"
import ClientImportsOwnServer from "./ClientImportsOwnServer";
import ServerExample from "./ServerExample"

export default function Page() {
  return (
    <div>
      <p>The main issue here is that when we access cookies through a server component imported from a client component, it does not work. It works if we import it in a server component (page layout here) and pass it to the client component as a prop.</p>
      <ClientExampleEmbeddedServer action={ServerExample}/>
      <ClientImportsOwnServer />

      <p>
        <Link href="/issue2">See issue 2</Link>
      </p>
    </div>
  )
}
