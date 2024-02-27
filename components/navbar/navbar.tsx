import { MobileNavbar } from "./mobile-navbar";
import { NavbarAuth } from "./navbar-auth";
import { NavbarLinks } from "./navbar-links";
import { Logo } from "./navbar-logo";

export const Navbar = () => {
  return (
    <nav className="mx-6 flex flex-row  items-center justify-between gap-4 py-3 font-poppins sm:mx-24 xl:mx-36">
      <Logo />
      <NavbarLinks />
      <NavbarAuth />
      <MobileNavbar />
    </nav>
  );
};
