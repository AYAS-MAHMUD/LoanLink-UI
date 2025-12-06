import React from "react";

const AllLoans = () => {
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
      </div>
    </div>
  );
};

export default AllLoans;
