import Link from "next/link";

export const FooterLinks = () => {
  return (
    <div className="mt-7 hidden md:block  lg:pr-0 xl:mt-14 2xl:mt-16 3xl:mt-24">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-medium tracking-wide xl:text-black/70">
          Links
        </h1>
        <div className="h-1 w-20 bg-primary pt-1"></div>
      </div>
      <div className="flex flex-col items-center gap-1.5 pt-1 2xl:gap-3 2xl:pt-4">
        <Link href="/home" className="hover:text-primary">
          Home
        </Link>
        <Link href="/explore" className="hover:text-primary">
          Explore
        </Link>
        <Link href="/contact" className="hover:text-primary">
          Contact
        </Link>
      </div>
    </div>
  );
};
