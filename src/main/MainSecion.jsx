import React from 'react'
import { motion } from 'framer-motion'
import { Percent, DollarSign, Calendar } from 'lucide-react'
import { FiChevronRight } from 'react-icons/fi'


const loans = [
  {
    id: 1,
    title: 'Personal Flex Loan',
    tagline: 'Quick funds for your personal needs with flexible repayment...',
    interest: '8.5%',
    max: '$5,000',
    img: '/images/loan-plant.jpg',
    tag: 'Personal'
  },
  {
    id: 2,
    title: 'Small Business Boost',
    tagline: 'Capital to grow your small business or startup venture.',
    interest: '7.2%',
    max: '$25,000',
    img: '/images/loan-business.jpg',
    tag: 'Business'
  },
  {
    id: 3,
    title: 'Education Support',
    tagline: 'Invest in your future with our low-interest education loans.',
    interest: '5.5%',
    max: '$15,000',
    img: '/images/loan-education.jpg',
    tag: 'Education'
  },
  {
    id: 4,
    title: 'Emergency Cash',
    tagline: 'Instant approval for unexpected expenses and emergencies.',
    interest: '9.8%',
    max: '$2,000',
    img: '/images/loan-emergency.jpg',
    tag: 'Emergency'
  },
  {
    id: 5,
    title: 'Home Improvement',
    tagline: 'Renovate your home with our specialized improvement loans.',
    interest: '6.9%',
    max: '$20,000',
    img: '/images/loan-home.jpg',
    tag: 'Personal'
  },
  {
    id: 6,
    title: 'Tech Upgrade',
    tagline: 'Get the latest gadgets and equipment with easy EMI plans.',
    interest: '8%',
    max: '$3,000',
    img: '/images/loan-tech.jpg',
    tag: 'Personal'
  }
]

function Badge({ children, color = 'bg-sky-100 text-sky-700' }) {
  return (
    <span className={`text-xs px-3 py-1 rounded-full font-medium ${color}`}>
      {children}
    </span>
  )
}

export default function MainSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div>
            <h1 className='text-4xl font-bold mb-4'>Available Loans</h1>
            <p className='mb-15 text-xl'>Explore our most popular loan products designed to meet your specific <br /> financial needs.</p>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Cards column (spans 3 cols) */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loans.map((loan) => (
              <motion.div
                key={loan.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100"
              >
                <div className="h-36 bg-gray-50 relative">
                  {/* image area */}
                  <img
                    src={loan.img}
                    alt={loan.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // fallback placeholder color block if image missing
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <Badge>{loan.tag}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{loan.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{loan.tagline}</p>

                  <div className="mt-5 flex flex-col items-center justify-between gap-4">
                    <div className="flex justify-between  gap-4">
                      <div className="flex items-center gap-2 py-1 px-2 text-black bg-slate-50 rounded-lg">
                        <Percent size={18} />
                        <div>
                          <p className="text-xs text-slate-400">Interest</p>
                          <p className="font-semibold text-slate-800 text-sm">{loan.interest}</p>
                        </div>
                      </div>

                      <div className="flex items-center text-black gap-2 px-3 py-2 bg-slate-50 rounded-lg">
                        <DollarSign size={18} />
                        <div>
                          <p className="text-xs text-slate-400">Max Amount</p>
                          <p className="font-semibold text-slate-800 text-sm">{loan.max}</p>
                        </div>
                      </div>
                    </div>

                    <button className="ml-auto hover:text-white text-black transition ease-in-out justify-center inline-flex text-center w-full items-center gap-2 px-4 py-2 rounded-full border border-cyan-800  hover:bg-cyan-800">
                      View Details <FiChevronRight />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar - Loan Calculator and benefits */}
        <aside className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-cyan-900 to-sky-600 text-white rounded-2xl p-6 shadow-lg"
          >
            <h4 className="flex items-center gap-3 text-lg font-semibold">
              <span className="bg-white/10 p-2 rounded-md inline-flex">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 8v4l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Loan Calculator
            </h4>

            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-white/80">
                <span>Loan Amount</span>
                <strong>$17,500</strong>
              </div>

              <input type="range" min="1000" max="50000" defaultValue={17500} className="w-full mt-4" />

              <div className="flex items-center justify-between text-sm text-white/80 mt-6">
                <span>Duration</span>
                <strong>14 Months</strong>
              </div>
              <input type="range" min="1" max="60" defaultValue={14} className="w-full mt-4" />

              <div className="mt-6 grid grid-cols-2 gap-4 text-white">
                <div>
                  <p className="text-xs text-white/80">Monthly EMI</p>
                  <p className="text-2xl font-bold">$1317</p>
                </div>
                <div>
                  <p className="text-xs text-white/80">Total Payable</p>
                  <p className="text-2xl font-bold">$18,444</p>
                </div>
              </div>

              <button className="mt-6 w-full bg-white text-sky-700 py-3 rounded-xl font-semibold shadow-sm">See All Loans →</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-2xl p-6 shadow-md border"
          >
            <h4 className="text-lg font-semibold mb-4">Why LoanLink?</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-sky-50 rounded-lg">
                  <Calendar size={18} className="text-sky-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Fast Approval</p>
                  <p className="text-sm text-slate-500">Decisions in minutes, funds in hours.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2 bg-sky-50 rounded-lg">
                  <Percent size={18} className="text-sky-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Low Rates</p>
                  <p className="text-sm text-slate-500">Competitive interest rates starting at 5.5%.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2 bg-sky-50 rounded-lg">
                  <svg className="w-5 h-5 text-sky-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 1v4M5 7v14h14V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Secure</p>
                  <p className="text-sm text-slate-500">Bank-grade encryption for your data safety.</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2 bg-sky-50 rounded-lg">
                  <svg className="w-5 h-5 text-sky-700" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">24/7 Support</p>
                  <p className="text-sm text-slate-500">Our team is always here to help you.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </aside>
      </div>
    </div>
  )
}
