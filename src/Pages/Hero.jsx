import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, DollarSign } from "lucide-react";
import heroimg from '../assets/hero.avif'
import { Link } from "react-router";
export default function Hero() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div className="flex items-center space-x-2 mb-5">
            <span className="w-3 h-3 bg-cyan-600 rounded-full"></span>
            <span className="text-sm font-medium text-gray-600">
              Fast & Secure Microloans
            </span>
          </div>

          {/* Heading */}
          <motion.h1 initial={{opacity : 0 ,x : -60}} animate={{opacity : 1, x : 0}} transition={{duration : 1}} className="text-6xl font-extrabold leading-tight ">
            Microloans.
            <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-800">
              Fast.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Fair.
            </span>
            <br />
            Flexible.
          </motion.h1>

          {/* Description */}
          <motion.p initial={{opacity : 0 ,x : 60}} animate={{opacity : 1, x : 0}} transition={{duration : 1}} className="text-gray-600 mt-6 text-lg max-w-md">
            Get the financial support you need with transparent terms and instant approval.
            No hidden fees, just simple lending.
          </motion.p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-8">
            <button className="bg-cyan-700 hover:bg-cyan-800 text-white px-6 py-3 rounded-xl shadow-md">
              Apply for Loan →
            </button>

            <Link to='/allloan' className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md">
              Explore Loans
            </Link>
          </div>

          {/* Features */}
          <div className="flex items-center space-x-8 mt-10 text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={18} />
              <span>Instant Approval</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={18} />
              <span>Low Interest Rates</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={18} />
              <span>Secure Process</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative flex items-center justify-center">

          {/* Main Image Frame */}
          <motion.div
            initial={{ rotate: -14, opacity: 0 ,x: 20}}
            animate={{ rotate: -2, opacity: 1 ,x:0}}
            transition={{ duration: 1.5 }}
            
            
            className="w-[420px] hover:scale-105 transition ease-in-out h-[420px] bg-gradient-to-b from-gray-200 to-gray-300 rounded-3xl shadow-xl relative overflow-hidden"
          >
            {/* Replace with real image */}
            <img
              src={heroimg}
              alt="person"
              className="w-full object-center h-full object-cover"
            />
          </motion.div>

          {/* Loan Approved Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-10 right-5 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center space-x-3"
          >
            <div className="bg-green-100 p-2 rounded-full">
              <DollarSign className="text-green-600" size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Loan Approved</p>
              <p className="font-bold text-gray-800">$5,000</p>
            </div>
          </motion.div>

          {/* Interest Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-8 right-10 bg-white shadow-xl rounded-2xl px-5 py-4"
          >
            <p className="text-xs text-gray-500">
              Interest Rate <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-md">Low</span>
            </p>
            <p className="text-3xl font-bold text-gray-800 mt-1">5.5%</p>
            <p className="text-xs text-gray-500">/ year</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
