import Link from "next/link";

export default function PrimaryHeader() {
  return (
    <div className="bg-sky-600 p-5">
      <nav className="container mx-auto flex text-white">
        <div className="me-7">
          <img className="w-1" src="/vercel.svg" />
          <span className="font-semibold">Gym Head</span>
        </div>
        <Link href="/" className="hover:underline">
          Blogs
        </Link>
      </nav>
    </div>
  );
}
