import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: "rotate(0deg)",
      transition: ".3s",
    }}
    viewBox="0 0 1440 410"
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
      d="m0 205 48-20.5C96 164 192 123 288 116.2 384 109 480 137 576 164c96 27 192 55 288 68.3 96 13.7 192 13.7 288 6.9 96-7.2 192-20.2 288 0 96 20.8 192 74.8 288 41 96-34.2 192-157.2 288-218.7S2208 0 2304 47.8c96 48.2 192 143.2 288 170.9 96 27.3 192-13.7 288-6.9 96 7.2 192 61.2 288 47.9 96-13.7 192-95.7 288-143.5 96-48.2 192-61.2 288-61.5 96 .3 192 13.3 288 54.6 96 40.7 192 109.7 288 157.2 96 47.5 192 75.5 288 82s192-6.5 288-20.5 192-27 288-41 192-27 288-34.2c96-6.8 192-6.8 288-27.3S5952 164 6048 123s192-82 288-47.8c96 33.8 192 143.8 288 198.1 96 54.7 192 54.7 240 54.7h48v82H0Z"
      style={{
        transform: "translate(0,0)",
        opacity: 1,
      }}
    />
  </svg>
);
export default SvgComponent;
