import { type SVGProps } from "react";

export interface StarIconProps extends SVGProps<SVGSVGElement> {
  size?: "sm" | "md" | "lg";
}

export function StarIcon({ size = "md", ...props }: StarIconProps) {
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
      <path d="M12 3L14.781 8.59516L21 9.4979L16.5 13.8507L17.562 20L12 17.0952L6.438 20L7.5 13.8507L3 9.4979L9.219 8.59516L12 3Z" />
    </svg>
  );
}

StarIcon.displayName = "StarIcon";
