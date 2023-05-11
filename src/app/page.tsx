import ClientExampleEmbeddedServer from "./ClientExampleEmbeddedServer"
import ClientImportsOwnServer from "./ClientImportsOwnServer";
import ServerExample from "./ServerExample"

export default function Page() {
  return (
    <div>
      <ClientExampleEmbeddedServer action={ServerExample}/>
      <ClientImportsOwnServer />
    </div>
  )
}
