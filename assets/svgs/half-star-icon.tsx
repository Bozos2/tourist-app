import { type SVGProps } from "react";

export interface HalfStarIconProps extends SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg";
}

export function HalfStarIcon({ size = "md", ...props }: HalfStarIconProps) {
  const sizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };
  const dimension = sizes[size];

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.438 20L12 17.0952V3L9.219 8.59516L3 9.4979L7.5 13.8507L6.438 20Z" />
    </svg>
  );
}

HalfStarIcon.displayName = "HalfStarIcon";
