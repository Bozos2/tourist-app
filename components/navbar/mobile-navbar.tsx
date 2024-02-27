"use client";

import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

export const MobileNavbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={24} /> : <CgMenuGridR size={24} />}
      </div>
      <div
        className={
          nav
            ? "absolute bottom-0 left-0 right-0 top-0 z-10 flex h-screen w-3/4 flex-col items-center justify-around bg-gradient-to-br from-[#121212] to-[#303367] text-center duration-300 ease-in lg:hidden"
            : "absolute bottom-0 left-[-100%] right-0 top-0 flex h-screen w-full flex-col items-center justify-around bg-gradient-to-br from-[#121212] to-[#303367] text-center duration-300 ease-in lg:hidden"
        }
      >
        <div>test test</div>
      </div>
    </>
  );
};
