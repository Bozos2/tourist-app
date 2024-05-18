"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  onTabChange: (action: string) => void;
}

const CommentTabs = ({ onTabChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const tabs = [
    { label: "All Reviews", value: "all" },
    { label: "Top Rated", value: "top" },
    { label: "Worst Rated", value: "bad" },
    { label: "Newest Reviews", value: "newest" },
  ];

  return (
    <div className="w-fit border-b border-gray-200  dark:border-white">
      <ul className="-mb-px flex flex-row flex-wrap transition-all  duration-300 lg:space-x-4">
        {tabs.map((tab) => (
          <li
            key={tab.value}
            role={`tab-${tab.value}`}
            className={cn(
              "tablink  inline-block whitespace-nowrap px-4 py-4 font-medium hover:cursor-pointer lg:px-6",
              {
                "border-b-2  border-primary text-primary":
                  activeTab === tab.value,
                "text-gray-500 hover:text-gray-600 dark:text-white dark:hover:text-gray-300":
                  activeTab !== tab.value,
              },
            )}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentTabs;
