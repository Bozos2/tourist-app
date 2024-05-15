import React from "react";
import { SpecialFeatureProps } from "@/helpers/card-icons-data";

interface IconDataProps {
  features: string[];
  iconData: Record<string, SpecialFeatureProps>;
}

export const DisplayIcons: React.FC<IconDataProps> = ({
  features,
  iconData,
}) => {
  return (
    <div className="flex flex-row flex-wrap items-center  gap-2 xl:gap-3">
      {features.map((feature, index) => {
        const featureData = iconData[feature];
        return featureData ? (
          <div
            key={index}
            className="flex flex-row items-center gap-1 rounded-lg border border-primary px-2 py-1 dark:border-0 dark:bg-primary"
          >
            {featureData.icon}
            <span className="text-sm text-primary dark:text-white">
              {featureData.label}
            </span>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default DisplayIcons;
