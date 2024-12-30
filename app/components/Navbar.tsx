import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-10 text-4xl font-bold justify-center">
      <Link href='/'>Home</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/cv'>CV</Link>
      <Link href='/game'>Game</Link>
    </nav>
  );
}
