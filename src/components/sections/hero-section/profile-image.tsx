"use client";

import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      className="hero_image rounded-full"
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        opacity: 1,
        scale: 1,
      }}
      transition={{
        borderRadius: {
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        },
      }}
    />
  );
}
