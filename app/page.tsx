import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row gap-4">
      <Link
        href={"/login"}
        className="rounded-md bg-white px-4 py-2 text-black shadow-sm"
      >
        Login
      </Link>
      <Link
        href={"/register"}
        className="rounded-md bg-white px-4 py-2 text-black shadow-sm"
      >
        Register
      </Link>
    </div>
  );
}
