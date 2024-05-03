import { StarIcon } from "@/assets/svgs/rating-icon";
import { HalfStarIcon } from "@/assets/svgs/half-star-icon";

import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

export interface RateProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: string;
  stars?: 1 | 2 | 3 | 4 | 5;
  labelProps?: HTMLAttributes<HTMLSpanElement>;
}

export function Rate({
  value,
  className,
  label,
  stars = 5,
  labelProps = {},
  ...rest
}: RateProps) {
  const { className: labelClassName, ...labelRest } = labelProps;

  return (
    <div
      className={cn("flex items-center justify-center gap-0.5", className)}
      {...rest}
    >
      {[...Array(stars)].map((_, index) => (
        <div key={index} className="relative">
          {value >= index + 1 ? (
            <StarIcon className="fill-primary stroke-primary" />
          ) : (
            <StarIcon className="fill-slate-200 stroke-slate-200" />
          )}
          {value > index && value < index + 1 ? (
            <HalfStarIcon className="absolute left-0 top-0 fill-primary stroke-primary" />
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
