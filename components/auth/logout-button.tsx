"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
  style?: string;
}

export const LogoutButton = ({ children, style }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className={`cursor-pointer ${style}`}>
      {children}
    </span>
  );
};
