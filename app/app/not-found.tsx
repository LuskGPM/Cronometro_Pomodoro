import Link from 'next/link'

export default function NotFound() {
  return <main className="m-auto">
    <h1 className="font-extrabold text-[5rem]">NOT FOUND</h1>
    <span className="font-mono text-[3rem]">ERROR 404</span>
    <br />
    <Link href="/" className="text-xl hover:underline"> - Back to home -</Link>
  </main>
}