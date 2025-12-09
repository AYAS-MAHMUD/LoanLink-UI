import { useQuery } from "@tanstack/react-query";
import React, { useContext, useRef, useState } from "react";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const MyLoan = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const Modalref = useRef();

  const [open, setOpen] = useState(false);

  const [single, setSingle] = useState([]);

  console.log(single);
  const viewDetails = (id) => {
    setOpen(true);
    console.log(id);
    axiosSecure.get(`/loanApplication/${id}/single`).then((res) => {
      setSingle(res.data);
      // console.log('Singla data is comming ',res)
    });
  };
  const { data: loan = [], refetch } = useQuery({
    queryKey: ["myloan", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/loanApplication?email=${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  // Deleted User loan Application
  const handlecancelLoan = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/loanApplication/${id}`);
        refetch().then((res) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div className="p-4">
      {/* ✅ Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra w-full text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Loan Id</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Application Fee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loan.map((i, idx) => (
              <tr key={i._id}>
                <th>{idx + 1}</th>
                <td>{i.loanId}</td>
                <td className="font-medium">{i.loanTitle}</td>
                <td>{i.loanAmount}</td>

                {/* Fee Status */}
                <td>
                  {i.applicationFeeStatus === "paid" ? (
                    <span className="badge badge-success badge-sm">Paid</span>
                  ) : (
                    <span className="badge badge-warning badge-sm">UnPaid</span>
                  )}
                </td>

                {/* Loan Status */}
                <td>
                  {i.status === "approved" && (
                    <span className="badge badge-success">Approved</span>
                  )}
                  {i.status === "pending" && (
                    <span className="badge badge-warning">Pending</span>
                  )}
                  {i.status === "rejected" && (
                    <span className="badge badge-error">Rejected</span>
                  )}
                </td>

                {/* Actions */}
                <td className="space-x-2">
                  {i.applicationFeeStatus !== "paid" && (
                    <button className="btn btn-xs btn-primary">Pay</button>
                  )}
                  <button
                    onClick={() => handlecancelLoan(i._id)}
                    className="btn btn-xs btn-error"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => viewDetails(i._id)}
                    className="btn btn-xs btn-outline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Card View */}
      <div className="md:hidden space-y-4">
        {loan.map((i, idx) => (
          <div
            key={i._id}
            className="bg-base-100 rounded-xl shadow p-4 space-y-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-sm">
                {idx + 1}. {i.loanTitle}
              </h3>
              <span className="text-sm font-semibold">{i.loanAmount}</span>
            </div>

            <p className="text-xs text-gray-500">Loan ID: {i.loanId}</p>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs">App Fee</p>
                {i.applicationFeeStatus === "paid" ? (
                  <span className="badge badge-success badge-sm">Paid</span>
                ) : (
                  <span className="badge badge-warning badge-sm">UnPaid</span>
                )}
              </div>

              <div>
                <p className="text-xs">Status</p>
                {i.status === "approved" && (
                  <span className="badge badge-success badge-sm">Approved</span>
                )}
                {i.status === "pending" && (
                  <span className="badge badge-warning badge-sm">Pending</span>
                )}
                {i.status === "rejected" && (
                  <span className="badge badge-error badge-sm">Rejected</span>
                )}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              {i.applicationFeeStatus !== "Paid" && (
                <button className="btn btn-sm btn-primary flex-1">Pay</button>
              )}

              <button
                onClick={() => handlecancelLoan(i._id)}
                className="btn btn-sm btn-error flex-1"
              >
                Cancel
              </button>

              <button onClick={() => viewDetails(i._id)} className="btn btn-sm btn-outline flex-1">View</button>
            </div>
          </div>
        ))}
      </div>
      {/* when click view btn then open modal */}
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
                    Your {single.loanTitle} application
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
                    {single.status.toUpperCase()}
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

export default MyLoan;
