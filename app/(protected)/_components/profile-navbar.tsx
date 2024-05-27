"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { FaUser, FaHeart, FaMapMarkerAlt, FaCommentDots } from "react-icons/fa";

const tabs = [
  { title: "About", icon: <FaUser /> },
  { title: "Locations", icon: <FaMapMarkerAlt /> },
  { title: "Reviews", icon: <FaCommentDots /> },
  { title: "Favorites", icon: <FaHeart /> },
];

const duration = 0.3;

const ProfileNavbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mt-3 flex w-full items-center justify-around pb-3">
      {tabs.map((data, i) => (
        <motion.div
          className="relative cursor-pointer px-3 py-2 xl:px-5"
          key={i}
          initial={{ color: i === selected ? "#454dd8" : "#888" }}
          animate={{ color: i === selected ? "#454dd8" : "#888" }}
          transition={{ duration }}
          onClick={() => setSelected(i)}
        >
          <span className="relative flex flex-row items-center gap-2">
            {data.icon} {data.title}
          </span>
          {i === selected && (
            <motion.div
              className="absolute -bottom-0.5 left-0 right-0 h-1 rounded-sm bg-primary"
              layoutId="selected"
              transition={{ duration }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProfileNavbar;
