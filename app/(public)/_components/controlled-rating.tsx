"use client";

import React, { useState } from "react";
import { StarIcon } from "@/assets/svgs/rating-icon";
import { cn } from "@/lib/utils";

import { type HTMLAttributes } from "react";

export interface ControlledRateProps extends HTMLAttributes<HTMLDivElement> {
  initialValue?: number;
  stars?: 1 | 2 | 3 | 4 | 5;
  onRatingChange?: (rating: number) => void;
}

export function ControlledRate({
  initialValue = 0,
  stars = 5,
  onRatingChange,
  className,
  ...rest
}: ControlledRateProps) {
  const [rating, setRating] = useState(initialValue);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    const newRating = index + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div
      className={cn("flex items-center justify-center gap-0.5", className)}
      {...rest}
    >
      {[...Array(stars)].map((_, index) => (
        <div
          key={index}
          className="relative cursor-pointer"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          {(hoverRating || rating) > index ? (
            <StarIcon className="fill-primary stroke-primary" />
          ) : (
            <StarIcon className="fill-slate-200 stroke-slate-200" />
          )}
        </div>
      ))}
    </div>
  );
}

ControlledRate.displayName = "ControlledRate";
