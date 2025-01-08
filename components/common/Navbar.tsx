import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex gap-10 text-2xl font-bold justify-start text-white bg-gray-200 bg-opacity-20 p-4 border rounded mx-10 my-10">
      <Link href='/' aria-label="Go to Home" title="Go to Home">SecretProvider</Link>
    </nav>
  );
}
