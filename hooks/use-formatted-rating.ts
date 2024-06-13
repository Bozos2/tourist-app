import * as React from "react";

export const useFormattedRating = (rating: number) => {
  return React.useMemo(() => {
    if (rating === 0) {
      return "0";
    }
    return rating.toFixed(1);
  }, [rating]);
};
