import Link from "next/link";

export default function PrimaryFooter() {
  return (
    <div className="bg-sky-600 p-5">
      <footer className="container mx-auto text-white">
        <nav>
          <Link href="/" className="hover:underline">
            Blogs
          </Link>
        </nav>
      </footer>
    </div>
  );
}
