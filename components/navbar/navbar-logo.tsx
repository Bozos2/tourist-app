import Image from "next/image";

import logo from "@/assets/svgs/trip-teasers-logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative top-1.5">
        <Image src={logo} alt="logo" width={120} height={120} />
      </div>
    </div>
  );
};
