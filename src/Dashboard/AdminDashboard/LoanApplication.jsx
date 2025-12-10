import React, { useState } from "react";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { GrView } from "react-icons/gr";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const LoanApplication = () => {
  const axiosSecure = useAxiosSecure();
  const [open, setOpen] = useState(false);
  const [single, setSingle] = useState([]);
  const { data: allApplication = [] } = useQuery({
    queryKey: ["allapplication"],
    queryFn: async () => {
      const res = await axiosSecure.get("/loanApplication/allApplication");
      return res.data;
    },
  });
  // console.log(allApplication)

  const ManagerviewDetails = (id) => {
    // console.log(id)
    setOpen(true);
    axiosSecure.get(`/loanApplication/${id}/single`).then((res) => {
      setSingle(res.data);
      // console.log('Singla data is comming ',res)
    });
  };
  return (
    <div>
      <div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Loan ID</th>
              <th>Borrower Name</th>
              <th>Borrowr Email</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allApplication.map((i, idx) => (
              <tr key={i._id} className="text-center">
                <th>{idx + 1}</th>
                <td>{i.loanId}</td>
                <td>{i.fullName}</td>
                <td>{i.borrowerEmail}</td>
                <td>{i.loanAmount}</td>
                <td>
                  <span
                    className={`badge  ${
                      i.status === "approved"
                        ? "badge-success"
                        : i.status === "rejected"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {i.status}
                  </span>
                </td>

                <td className="">
                  <button
                    onClick={() => ManagerviewDetails(i._id)}
                    className="btn bg-cyan-700"
                  >
                    <GrView />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/55"
            />

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              className="relative z-10 w-full max-w-xl  bg-cyan-900 text-white rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Borrower Loan Application
                  </h3>
                  <hr className="my-5" />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md  hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <FiX />
                </button>
              </div>

              {/* Code here */}
              <div className="mt-6 space-y-5">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-cyan-300">Full Name</p>
                    <p className="font-medium">{single.fullName}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300">Email</p>
                    <p className="font-medium">{single.borrowerEmail}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300">Contact</p>
                    <p className="font-medium">{single.contactNumber}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300">Address</p>
                    <p className="font-medium">{single.address}</p>
                  </div>
                </div>

                {/* Loan Details */}
                <div className="border-t border-cyan-700 pt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-cyan-300">Loan Title</p>
                    <p className="font-medium">{single.loanTitle}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300">Reason</p>
                    <p className="font-medium">{single.reasonForLoan}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300">Loan Amount</p>
                    <p className="font-semibold text-lg">
                      ৳ {single.loanAmount}
                    </p>
                  </div>
                  <div>
                    <p className="text-cyan-300">Interest Rate</p>
                    <p className="font-medium">{single.loanInterestRate}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300">Monthly Income</p>
                    <p className="font-medium">৳ {single.monthlyIncome}</p>
                  </div>
                  <div>
                    <p className="text-cyan-300">Income Source</p>
                    <p className="font-medium">
                      {single.incomeSource || "Not provided"}
                    </p>
                  </div>
                </div>

                {/* Note */}
                <div className="border-t border-cyan-700 pt-4">
                  <p className="text-cyan-300 text-sm mb-1">Extra Note</p>
                  <p className="text-sm leading-relaxed opacity-90">
                    {single.extraNote}
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between pt-4 border-t border-cyan-700">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                          ${
                            single.status === "pending"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : single.status === "approved"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-red-500/20 text-red-300"
                          }
                        `}
                  >
                    {single.status}
                  </span>

                  <span className="text-xs opacity-70">
                    Submitted:{" "}
                    {new Date(single.submittedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoanApplication;
