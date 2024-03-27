import Link from "next/link";

export const NavbarLinks = () => {
  return (
    <nav className="hidden items-center  justify-center gap-16 text-lg lg:flex">
      <Link
        href="/home"
        className="group tracking-wider transition duration-300 hover:text-primary focus:text-primary"
      >
        Home
        <span className="block h-0.5 max-w-0 bg-primary transition-all duration-500 group-hover:max-w-full"></span>
      </Link>
      <Link
        href="/explore"
        className="group tracking-wider duration-300 hover:text-primary focus:text-primary"
      >
        Explore
        <span className="block h-0.5 max-w-0 bg-primary transition-all duration-500 group-hover:max-w-full"></span>
      </Link>
      <Link
        href="/contact"
        className="group tracking-wider transition duration-300 hover:text-primary focus:text-primary"
      >
        Contact
        <span className="block h-0.5 max-w-0 bg-primary transition-all duration-500 group-hover:max-w-full"></span>
      </Link>
    </nav>
  );
};
