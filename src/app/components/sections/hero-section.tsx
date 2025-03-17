"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="section flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="hero_image"
        initial={{ opacity: 0, scale: 0.8 }}
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
          opacity: {
            duration: 1.2,
          },
          scale: {
            duration: 0.8,
          },
        }}
      />
    </div>
  );
}
