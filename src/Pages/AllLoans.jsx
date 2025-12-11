import { useQuery } from "@tanstack/react-query";
import React, { use, useEffect, useState } from "react";
// import { useAxios } from "../Hook/useAxios";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";
import { Badge, DollarSign, Percent } from "lucide-react";
import { FiChevronRight } from "react-icons/fi";
import LoanCard from "../Components/LoanCard";
import { useAxiosSecure } from "../Hook/useAxiosSecure";

const AllLoans = () => {
  const axios = useAxiosSecure();
  const [totalPage,setTotalPage] = useState(0)
  const [currentPage,setCurrentpage] = useState(1)
  const limit = 9;
  console.log(totalPage)

const [allloan,setAllloan] = useState([])
  useEffect(()=>{
    axios.get(`/allloans?limit=${limit}&skip=${(currentPage-1)*limit}`)
    .then(res=>{
      setAllloan(res.data.result)
      setTotalPage(Math.ceil(res.data.count/limit))
    })
  },[currentPage])
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-8 mx-5">
        <motion.h1 initial={{opacity : 0 ,y : 40}} animate={{opacity : 1, y : 0}} transition={{duration : 1}} className="text-3xl md:text-4xl font-bold  mb-4">
          Explore Our Loans
        </motion.h1>
        <motion.p initial={{opacity : 0 ,y : -40}} animate={{opacity : 1, y : 0}} transition={{duration : 1}} className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Find the perfect financial solution for your needs. Compare interest
          rates, terms, and amounts to make an informed decision.
        </motion.p>
      </div>
      {/* control */}
      <div className="rounded-2xl p-6 shadow-subtle mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* search */}
          {/* dropdown filter */}
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allloan.map((loan) => (
              <LoanCard loan={loan}/>
            ))}
          </div>
        </div>
      </div>
      
      <div className="my-10 flex flex-wrap  justify-center gap-3">
        <button className="btn" onClick={()=>setCurrentpage((prev)=>Math.max(prev-1,1))}>Prev</button>
        {
          [...Array(totalPage).keys()].map(i=><button onClick={()=>setCurrentpage(i+1)} className={`btn ${currentPage
            ===i+1 && 'bg-cyan-800 text-white'
          }`}>{i+1}</button>)
        }
        <button className="btn" onClick={()=>setCurrentpage((current)=> Math.min(current+1,totalPage))}>Next</button>
      </div>
    </div>
  );
};

export default AllLoans;
