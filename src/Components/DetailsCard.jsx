import React, { use, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Mail, Tag, DollarSign, Star, ChevronRight } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";
import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../Hook/useAxiosSecure";


const DetailsCard = () => {
  const [open, setOpen] = useState(false);
  const loan = useLoaderData();
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate();
  // for form
  const { register, handleSubmit } = useForm();

  const handleLoanApplicationSubmit = (data) => {
    data.loanId = loan._id;
    console.log(data);
    Swal.fire({
      title: `Ready for ${loan.title}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/loanApplication", data).then((res) => {
          Swal.fire({
            title: "Submitted",
            text: "Your application submitted.",
            icon: "success",
          }).then(() => {
            navigate('/dashboard/myloan');
          });
        });
      }
    });
  };
  return (
    <div className="min-h-screen font-sans antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Head */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            {loan.title}
          </h1>
          <p className="mt-3  max-w-3xl">{loan.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 bg-cyan-800 text-emerald-300 px-4 py-2 rounded-full text-sm">
              <Phone size={16} className="text-emerald-300" />
              Support
            </span>

            <span className="inline-flex items-center gap-2 bg-cyan-800 text-slate-200 px-4 py-2 rounded-full text-sm">
              <Mail size={16} className="text-slate-200" />
              help@loanlink.example
            </span>
          </div>
        </motion.header>

        {/* Card */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className=" rounded-2xl shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          {/* Image column */}
          <div className="md:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={loan.img}
                alt={loan.title}
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/800x600?text=Image")
                }
                className="w-full h-64 object-cover md:h-full"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-slate-800/60 text-slate-100 px-3 py-1 rounded-full text-sm">
                <Tag size={14} />
                {loan.tag}
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">{loan.title}</h2>
                <p className="mt-2 text-slate-500 max-w-xl">{loan.tagline}</p>
              </div>

              <div className="hidden md:flex items-center gap-6">
                <div className="text-sm text-slate-500">
                  Transparent fees • No hidden charges
                </div>
                <div className="text-sm font-semibold">
                  Estimated EMI: <span className="">$150/mo</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              <StatCard
                icon={<DollarSign size={18} />}
                label="Max Loan"
                value={loan.max}
              />
              <StatCard
                icon={<Star size={18} />}
                label="Interest"
                value={loan.interest}
              />
              <StatCard
                label="Eligibility"
                value={
                  <span className="block font-semibold">
                    Salaried &amp; Self-employed
                  </span>
                }
              />
              <StatCard
                label="Tenure"
                value={
                  <span className="block font-semibold">6 - 36 months</span>
                }
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-sm text-slate-400">
                  Transparent fees • No hidden charges
                </div>
                <div className="text-lg font-semibold mt-1">
                  Estimated EMI: <span className="">$150/mo</span>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="bg-cyan-800 text-gray-300 flex items-center gap-1 px-4 py-2 rounded-full font-medium hover:bg-cyan-900 ring-2 ring-cyan-500 hover:text-white transition-colors duration-400"
                aria-label={`Apply for ${loan.title}`}
              >
                Apply Now
                <ChevronRight size={18} />
              </motion.button>
            </div>

            {/* Mobile footer info */}
            <div className="md:hidden mt-2 text-sm text-slate-400">
              Transparent fees • No hidden charges — Estimated EMI:{" "}
              <span className="text-white font-semibold">$150/mo</span>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <section className="mt-12 max-w-3xl">
          <h3 className="text-xl font-bold mb-4">Frequently asked questions</h3>
          <div className="space-y-6 ">
            <div>
              <h4 className="font-semibold">
                How quickly can I get the funds?
              </h4>
              <p className="mt-1 text-sm text-slate-400">
                Most approvals within 24 hours after verification.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">What documents are required?</h4>
              <p className="mt-1 text-sm text-slate-400">
                ID, proof of income, and bank statement.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Can I prepay?</h4>
              <p className="mt-1 text-sm text-slate-400">
                Yes — no hidden penalty for early repayment.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Apply Modal */}
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
                    Apply for {loan.title}
                  </h3>
                  <p className="mt-1 text-sm ">
                    Fill the form or contact our team to complete your
                    application.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md  hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <FiX />
                </button>
              </div>

              <form
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
                onSubmit={handleSubmit(handleLoanApplicationSubmit)}
              >
                <input
                  {...register("fullName")}
                  required
                  name="fullName"
                  className="col-span-2 p-3 rounded-lg border dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  placeholder="Full name"
                />
                <input
                  {...register("borrowerEmail")}
                  defaultValue={user?.email}
                  required
                  readOnly
                  type="email"
                  name="borrowerEmail"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  placeholder="Email"
                />
                <input
                  {...register("loanInterestRate")}
                  defaultValue={loan.interest}
                  required
                  readOnly
                  name="loanInterestRate"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  placeholder="Interest Rate"
                />
                <input
                  {...register("loanTitle")}
                  defaultValue={loan.title}
                  required
                  readOnly
                  name="loanTitle"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50 col-span-2 dark:bg-slate-800"
                  placeholder="Loan title"
                />
                <input
                  {...register("nidOrpassport")}
                  required
                  name="nidOrpassport"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="National ID / Passport"
                />
                <input
                  {...register("contactNumber")}
                  required
                  name="contactNumber"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Phone"
                />
                <input
                  {...register("incomeSource")}
                  required
                  name="incomesource"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Income Source"
                />
                <input
                  {...register("monthlyIncome")}
                  required
                  name="monthlyIncome"
                  className="p-3 rounded-lg border dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Monthly Income"
                />
                <input
                  {...register("loanAmount")}
                  required
                  name="loanAmount"
                  className="p-3 col-span-2 rounded-lg border dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Loan Amount"
                />
                <input
                  {...register("reasonForLoan")}
                  required
                  name="reasonForLoan"
                  className="p-3 col-span-2 rounded-lg border dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Reason For Loan"
                />
                <input
                  {...register("address")}
                  required
                  name="address"
                  className="p-3 rounded-lg border col-span-2 dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Address"
                />
                <input
                  {...register("extraNote")}
                  required
                  name="extraNote"
                  className="p-3 rounded-lg border col-span-2 dark:border-slate-700 bg-slate-50  dark:bg-slate-800"
                  placeholder="Extra Note"
                />

                <div className="col-span-2 flex items-center justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-emerald-600 text-white"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function StatCard({ icon, label, value }) {
  return (
    <div className="p-4 rounded-lg border border-[#0f2130]">
      <div className="flex items-center gap-3">
        <div className="text-slate-300">{icon}</div>
        <div>
          <div className="text-xs text-slate-400">{label}</div>
          <div className="text-sm font-semibold mt-1">{value}</div>
        </div>
      </div>
    </div>
  );
}
export default DetailsCard;
