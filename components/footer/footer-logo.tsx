import Image from "next/image";

import logo from "@/assets/svgs/trip-teasers-logo.svg";

export const FooterLogo = () => {
  return (
    <div className="flex max-w-[260px] flex-col items-center md:items-start xl:mt-[-92px] xl:max-w-[320px] 2xl:mt-[-75px] 3xl:mt-[-85px]">
      <div className="relative top-3 h-[120px] w-[120px] xl:top-6 xl:h-[180px] xl:w-[180px] 3xl:h-[220px] 3xl:w-[220px]">
        <Image src={logo} alt="logo" fill />
      </div>
      <div>
        <p className="text-sm opacity-80 xl:text-black/70 xl:opacity-100 3xl:text-base 3xl:opacity-80">
          Copyright © 2024 Trip Teasers. All rights reserved. Explore,
          discover, and immerse yourself in the world of travel with Trip
          Teasers.
        </p>
      </div>
    </div>
  );
};
