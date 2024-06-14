"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const Progress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[1000] h-1.5 origin-left bg-[#5a61dc]"
      style={{ scaleX }}
    />
  );
};
