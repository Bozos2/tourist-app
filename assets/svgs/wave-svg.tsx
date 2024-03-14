import * as React from "react";
import { SVGProps } from "react";
const WaveSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: "rotate(0deg)",
      transition: ".3s",
    }}
    viewBox="0 0 1440 130"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1={0} x2={0} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(217, 217, 217, 1)" />
        <stop offset="100%" stopColor="rgba(73, 81, 223, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="m0 52 80 10.8C160 74 320 95 480 86.7 640 78 800 39 960 28.2c160-11.2 320 6.8 480 21.6C1600 65 1760 78 1920 71.5s320-32.5 480-43.3C2560 17 2720 22 2880 39s320 48 480 56.3c160 8.7 320-4.3 480-6.5 160-1.8 320 6.2 480 13 160 6.2 320 11.2 480 4.4 160-6.2 320-24.2 480-43.4C5440 43 5600 22 5760 13s320-4 480 10.8c160 15.2 320 41.2 480 52 160 11.2 320 6.2 480 0C7360 69 7520 61 7680 65s320 22 480 19.5 320-23.5 480-23.8c160 .3 320 21.3 480 26 160 4.3 320-8.7 480-15.2s320-6.5 480-15.2c160-8.3 320-26.3 480-32.5 160-6.8 320-1.8 480-2.1 160 .3 320-4.7 400-6.5l80-2.2v117H0Z"
      style={{
        transform: "translate(0,0)",
        opacity: 1,
      }}
    />
  </svg>
);
export default WaveSvg;
