import { UserAvatarButton } from "../auth/user-avatar-button";
import { ThemeToggle } from "../theme-toogle";
import { NavbarAuth } from "./navbar-auth";

export const Navbar = () => {
  return (
    <nav className="font-poppins flex flex-row items-center justify-end gap-4 py-2">
      <ThemeToggle />
      <NavbarAuth />
    </nav>
  );
};
