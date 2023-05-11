import Link from "next/link"

export default function Page() {
  return (
    <ul>
      <li><Link href="/issue1">Issue 1</Link> - individual server component imported two different ways</li>
      <li><Link href="/issue2">Issue 2</Link> - server component imported once causes issues imported a second time</li>
    </ul>
  )
}
