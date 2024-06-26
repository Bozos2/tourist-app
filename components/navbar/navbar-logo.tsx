import Image from "next/image";

import logo from "@/assets/svgs/trip-teasers-logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative left-[-15px] top-2">
        <Image src={logo} alt="logo" width={75} height={75} priority />
      </div>
    </div>
  );
};
