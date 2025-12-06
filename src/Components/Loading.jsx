import React from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

export default function Loading({ label = "Loading, please wait..." }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="text-cyan-500 text-6xl mb-6"
      >
        <FaSpinner />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-white text-lg font-semibold tracking-wide"
      >
        {label}
      </motion.p>

      <motion.div
        className="mt-6 flex gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              repeat: Infinity,
            },
          },
        }}
      >
        {["", "", ""].map((_, i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-cyan-500"
            variants={{
              hidden: { opacity: 0.3, y: 0 },
              visible: {
                opacity: 1,
                y: -8,
                transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse" },
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
