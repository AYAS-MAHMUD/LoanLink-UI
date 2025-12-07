import React from "react";
import { motion } from "framer-motion";
import { Badge, DollarSign, Percent } from "lucide-react";
import { FiChevronRight } from "react-icons/fi";
const LoanCard = ({ loan }) => {
  // console.log(loan);
  const maxlangth = 40;
  return (
    <div>
      <motion.div
        key={loan.id}
        whileHover={{ y: -6 }}
        className="bg-white rounded-2xl group shadow-md overflow-hidden border border-slate-100"
      >
        <div className="h-36 bg-gray-50 relative">
          {/* image area */}
          <img
            src={loan.img}
            alt={loan.title}
            className="w-full group-hover:scale-105 transition ease-in-out h-full object-cover"
            onError={(e) => {
              // fallback placeholder color block if image missing
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute top-3 right-3">
            <Badge>{loan.tag}</Badge>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900">{loan.title}</h3>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
            {loan.tagline.length>maxlangth?loan.tagline.slice(0,maxlangth) +"..." : loan.tagline}
          </p>

          <div className="mt-5 flex flex-col items-center justify-between gap-4">
            <div className="flex justify-between  gap-4">
              <div className="flex items-center gap-2 py-1 px-2 text-black bg-slate-50 rounded-lg">
                <Percent size={18} />
                <div>
                  <p className="text-xs text-slate-400">Interest</p>
                  <p className="font-semibold text-slate-800 text-sm">
                    {loan.interest}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-black gap-2 px-3 py-2 bg-slate-50 rounded-lg">
                <DollarSign size={18} />
                <div>
                  <p className="text-xs text-slate-400">Max Amount</p>
                  <p className="font-semibold text-slate-800 text-sm">
                    {loan.max}
                  </p>
                </div>
              </div>
            </div>

            <button className="ml-auto group-hover:text-white text-black  ease-in-out justify-center inline-flex text-center w-full items-center gap-2 px-4 py-2 rounded-full border border-cyan-800 transition   group-hover:bg-cyan-800">
              View Details <FiChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoanCard;
