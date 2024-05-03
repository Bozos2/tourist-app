"use client";
import React, { useState, useEffect } from "react";

import { SpecialFeatureProps } from "@/helpers/card-icons-data";

interface IconDataProps {
  features: string[];
  iconData: Record<string, SpecialFeatureProps>;
}

export const SpecialFeatures: React.FC<IconDataProps> = ({
  features,
  iconData,
}) => {
  const [visibleData, setVisibleData] = useState<string[]>([]);
  const hiddenCount = features.length - visibleData.length;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleData(features.slice(0, 3));
      } else if (window.innerWidth <= 870 && window.innerWidth >= 768) {
        setVisibleData(features.slice(0, 1));
      } else {
        setVisibleData(features.slice(0, 2));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [features]);

  return (
    <div className="flex flex-row flex-wrap items-center  gap-2 xl:gap-3">
      {visibleData.map((feature, index) => {
        const featureData = iconData[feature];
        return featureData ? (
          <div
            key={index}
            className="flex flex-row items-center gap-1 rounded-lg  border border-primary px-2 py-1 dark:border-0 dark:bg-primary"
          >
            {featureData.icon}
            <span className="text-sm text-primary dark:text-white">
              {featureData.label}
            </span>
          </div>
        ) : null;
      })}
      {hiddenCount > 0 && (
        <div className="flex items-center justify-center gap-1 rounded-lg  border border-primary px-2 py-0.5 dark:border-0 dark:bg-primary">
          <span className="text-primary dark:text-white">+{hiddenCount}</span>
        </div>
      )}
    </div>
  );
};

export default SpecialFeatures;
