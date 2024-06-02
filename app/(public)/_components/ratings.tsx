import { StarIcon } from "@/assets/svgs/rating-icon";
import { HalfStarIcon } from "@/assets/svgs/half-star-icon";

import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface RateProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  stars?: 1 | 2 | 3 | 4 | 5;
  labelProps?: HTMLAttributes<HTMLSpanElement>;
}

export function Rate({
  value,
  size = "md",
  className,
  label,
  stars = 5,
  labelProps = {},
  ...rest
}: RateProps) {
  const { className: labelClassName, ...labelRest } = labelProps;

  return (
    <div className={cn("flex items-center  gap-0.5", className)} {...rest}>
      {[...Array(stars)].map((_, index) => (
        <div key={index} className="relative">
          {value >= index + 1 ? (
            <StarIcon size={size} className="fill-primary stroke-primary" />
          ) : (
            <StarIcon size={size} className="fill-slate-200 stroke-slate-200" />
          )}
          {value > index && value < index + 1 ? (
            <HalfStarIcon
              size={size}
              className="absolute left-0 top-0 fill-primary stroke-primary"
            />
          ) : null}
        </div>
      ))}
      {label && (
        <span
          className={cn(
            "ml-1.5 text-sm font-normal leading-snug text-slate-500",
            labelClassName,
          )}
          {...labelRest}
        >
          {label}
        </span>
      )}
    </div>
  );
}

Rate.displayName = "Rate";
