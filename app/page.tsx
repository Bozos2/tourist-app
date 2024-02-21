import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 font-poppins">
      <p className="text-7xl text-primary">
        This is text for just testing color pallets
      </p>
      <Link href="/auth/login" className="text-3xl">
        Login
      </Link>
    </main>
  );
}
