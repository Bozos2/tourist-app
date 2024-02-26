import { NavbarAuth } from "./navbar-auth";
import { NavbarLinks } from "./navbar-links";
import { Logo } from "./navbar-logo";

export const Navbar = () => {
  return (
    <nav className="mx-36 flex  flex-row items-center justify-between gap-4 py-3 font-poppins">
      <Logo />
      <NavbarLinks />
      <NavbarAuth />
    </nav>
  );
};
