// PaymentCancel.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react"; // ← Lucide icon

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PaymentCancel() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div
        variants={item}
        className="max-w-lg w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 sm:p-12"
      >
        <div className="flex flex-col items-center text-center gap-6">
          
          {/* Lucide Error Icon */}
          <motion.div
            variants={item}
            className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center"
          >
            <XCircle className="text-red-600 dark:text-red-400" size={48} />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-3xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Payment Cancelled
          </motion.h1>

        

          {/* Buttons */}
          <motion.div variants={item} className="w-full flex flex-col sm:flex-row gap-4 mt-2">
            
            {/* Try Again Button */}
            <Link to="/dashboard/myloan" className="w-full">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-sm"
              >
                Try Again
              </motion.button>
            </Link>

            {/* Back to Home */}
            <Link to="/" className="w-full">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 py-3 font-medium rounded-lg"
              >
                Back to Home
              </motion.button>
            </Link>

          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
