import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAxios } from "../Hook/useAxios";
import Loading from "../Components/Loading";
import { motion } from "framer-motion";
import { Badge, DollarSign, Percent } from "lucide-react";
import { FiChevronRight } from "react-icons/fi";
import LoanCard from "../Components/LoanCard";

const AllLoans = () => {
  const axios = useAxios();
  const { data: allloan = [], isLoading } = useQuery({
    queryKey: ["allloans"],
    queryFn: async () => {
      const res = await axios.get("/allloans");
      return res.data;
    },
  });
  console.log(allloan);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-8">
        <h1 className="text-3xl md:text-4xl font-bold  mb-4">
          Explore Our Loans
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Find the perfect financial solution for your needs. Compare interest
          rates, terms, and amounts to make an informed decision.
        </p>
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
    </div>
  );
};

export default AllLoans;
