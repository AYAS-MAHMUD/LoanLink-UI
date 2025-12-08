import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Tag, DollarSign, Star, ChevronRight } from 'lucide-react'
import { useLoaderData } from 'react-router'

const DetailsCard=()=> {
    const loan = useLoaderData()
    console.log(loan)
  return (
    <div className="min-h-screen bg-[#081125] text-white font-sans antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Head */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">{loan.title}</h1>
          <p className="mt-3 text-slate-300 max-w-3xl">{loan.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 bg-emerald-50/10 text-emerald-300 px-4 py-2 rounded-full text-sm">
              <Phone size={16} className="text-emerald-300" />
              Support
            </span>

            <span className="inline-flex items-center gap-2 bg-slate-700/40 text-slate-200 px-4 py-2 rounded-full text-sm">
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
          className="bg-[#071122] rounded-2xl shadow-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          {/* Image column */}
          <div className="md:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={loan.img}
                alt={loan.title}
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image')}
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
                <p className="mt-2 text-slate-300 max-w-xl">{loan.tagline}</p>
              </div>

              <div className="hidden md:flex items-center gap-6">
                <div className="text-sm text-slate-400">Transparent fees • No hidden charges</div>
                <div className="text-sm font-semibold">Estimated EMI: <span className="text-white">$150/mo</span></div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              <StatCard icon={<DollarSign size={18} />} label="Max Loan" value={loan.max} />
              <StatCard icon={<Star size={18} />} label="Interest" value={loan.interest} />
              <StatCard label="Eligibility" value={<span className="block font-semibold">Salaried &amp; Self-employed</span>} />
              <StatCard label="Tenure" value={<span className="block font-semibold">6 - 36 months</span>} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="text-sm text-slate-400">Transparent fees • No hidden charges</div>
                <div className="text-lg font-semibold mt-1">Estimated EMI: <span className="text-white">$150/mo</span></div>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => onApply(loan)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-[#042018] px-6 py-3 rounded-xl font-semibold shadow-md"
                aria-label={`Apply for ${loan.title}`}
              >
                Apply Now
                <ChevronRight size={18} />
              </motion.button>
            </div>

            {/* Mobile footer info */}
            <div className="md:hidden mt-2 text-sm text-slate-400">Transparent fees • No hidden charges — Estimated EMI: <span className="text-white font-semibold">$150/mo</span></div>
          </div>
        </motion.section>

        {/* FAQ */}
        <section className="mt-12 max-w-3xl">
          <h3 className="text-xl font-bold mb-4">Frequently asked questions</h3>
          <div className="space-y-6 text-slate-300">
            <div>
              <h4 className="font-semibold">How quickly can I get the funds?</h4>
              <p className="mt-1 text-sm text-slate-400">Most approvals within 24 hours after verification.</p>
            </div>

            <div>
              <h4 className="font-semibold">What documents are required?</h4>
              <p className="mt-1 text-sm text-slate-400">ID, proof of income, and bank statement.</p>
            </div>

            <div>
              <h4 className="font-semibold">Can I prepay?</h4>
              <p className="mt-1 text-sm text-slate-400">Yes — no hidden penalty for early repayment.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value }) {
  return (
    <div className="p-4 bg-[#0b1723] rounded-lg border border-[#0f2130]">
      <div className="flex items-center gap-3">
        <div className="text-slate-300">{icon}</div>
        <div>
          <div className="text-xs text-slate-400">{label}</div>
          <div className="text-sm font-semibold mt-1">{value}</div>
        </div>
      </div>
    </div>
  )
}
export default DetailsCard