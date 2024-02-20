import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      Next js app
      <Link href="/auth/login">Login</Link>
    </main>
  );
}
