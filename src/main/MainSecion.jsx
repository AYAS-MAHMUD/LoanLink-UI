import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Percent, DollarSign, Calendar } from 'lucide-react'
import { FiChevronRight } from 'react-icons/fi'
import { useQuery } from '@tanstack/react-query'
import { useAxios } from '../Hook/useAxios'
import Loading from '../Components/Loading'
import LoanCard from '../Components/LoanCard'

function Badge({ children, color = 'bg-sky-100 text-sky-700' }) {
  return (
    <span className={`text-xs px-3 py-1 rounded-full font-medium ${color}`}>
      {children}
    </span>
  )
}

export default function MainSection() {
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(12);
  const [interest, setInterest] = useState(8.5);
  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);


  const axios = useAxios()

  useEffect(() => {
    
    const r = interest / 12 / 100;
    const emiValue = amount * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
    setEmi(Math.round(emiValue));
    setTotalPayable(Math.round(emiValue * months));
  }, [amount, months, interest]);


  const {data : loans = [],isLoading} = useQuery({
    queryKey : ['loan'],
    queryFn : async ()=>{
      const res = await axios.get('/lone/latestloan')
      return res.data
    }
  })
  console.log(loans)
  if(isLoading){
    return <Loading/>
  }
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
              <LoanCard loan={loan}/>
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
                <strong>${amount}</strong>
              </div>
                {/* rang 1 */}
              <input type="range" onChange={(e) => setAmount(Number(e.target.value))} min="1000" max="50000" defaultValue={17500} className="w-full mt-4" />

              <div className="flex items-center justify-between text-sm text-white/80 mt-6">
                <span>Duration</span>
                <strong>{months} Months</strong>
              </div>
              {/* rang 2 */}
              <input type="range" onChange={(e) => setMonths(Number(e.target.value))} min="1" max="60" defaultValue={14} className="w-full mt-4" />

              <div className="mt-6 grid grid-cols-2 gap-4 text-white">
                <div>
                  <p className="text-xs text-white/80">Monthly EMI</p>
                  <p className="text-2xl font-bold">${emi}</p>
                </div>
                <div>
                  <p className="text-xs text-white/80">Total Payable</p>
                  <p className="text-2xl font-bold">${totalPayable.toLocaleString()}</p>
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
