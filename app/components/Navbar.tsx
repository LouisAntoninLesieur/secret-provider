import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-10 text-2xl font-bold justify-center bg-slate-200 p-4 border rounded mx-10 my-10">
      <Link href='/'>Home</Link>
      <Link href='/generate-secret'>Generate secret</Link>
      <Link href='/contact'>Contact</Link>
    </nav>
  );
}
