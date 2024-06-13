export const useFormattedRating = (rating: number) => {
  if (rating === 0) {
    return "0";
  }
  return rating.toFixed(1);
};
