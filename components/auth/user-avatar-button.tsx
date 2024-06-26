"use client";

import Link from "next/link";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";
import { GearIcon } from "@radix-ui/react-icons";
import { PersonIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogoutButton } from "@/components/auth/logout-button";

import { useCurrentUser } from "@/hooks/use-current-user";

export const UserAvatarButton = () => {
  const user = useCurrentUser();
  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="bg-primary">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 px-4 py-2" align="end">
          <h3 className="text-lg font-semibold">{user?.name}</h3>
          <p className="mb-2 text-sm opacity-70">{user?.email}</p>
          <DropdownMenuItem className="cursor-pointer">
            <Link
              href={`/profile/${user?.name}-${user?.id}`}
              className="flex w-full flex-row items-center text-base"
            >
              <PersonIcon className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link
              href="/settings"
              className="flex w-full flex-row items-center text-base"
            >
              <GearIcon className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <LogoutButton>
            <DropdownMenuItem className="cursor-pointer text-base">
              <ExitIcon className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};
