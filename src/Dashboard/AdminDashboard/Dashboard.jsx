import React from 'react'
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const stats = [
  { id: 1, title: "Total Loans", value: 124 },
  { id: 2, title: "Pending Applications", value: 9 },
  { id: 3, title: "Approved", value: 78 },
  { id: 4, title: "Payments (USD)", value: "$1,240" },
];

const chartData = [
  { name: "Jan", loans: 20 },
  { name: "Feb", loans: 12 },
  { name: "Mar", loans: 18 },
  { name: "Apr", loans: 24 },
  { name: "May", loans: 16 },
  { name: "Jun", loans: 28 },
];

const recentApplications = [
  { id: "A-1001", name: "Rahim Khan", amount: 300, status: "Pending" },
  { id: "A-1002", name: "Sadia Akter", amount: 500, status: "Approved" },
  { id: "A-1003", name: "Masud Rana", amount: 150, status: "Rejected" },
];

// sample loans for table / cards
const sampleLoans = Array.from({ length: 6 }).map((_, i) => ({
  id: `L-${1000 + i}`,
  title: `Small Business Loan ${i + 1}`,
  category: "Business",
  interest: "12%",
  maxLimit: "$1,000",
}));
const Dashboard = () => {
  return (
    <div >
        <main className="p-4 sm:p-6">
            {/* Top stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((s) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className=" p-4 rounded-lg shadow-sm border dark:border-gray-700"
                >
                  <div className="text-sm ">
                    {s.title}
                  </div>
                  <div className="text-2xl font-bold mt-2">{s.value}</div>
                </motion.div>
              ))}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-2 text-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                <h3 className="font-semibold mb-4">Loans per Month</h3>
                <div style={{ width: "100%", height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="loans" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Applications */}
              <div className="bg-white text-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                <h3 className="font-semibold mb-4">Recent Applications</h3>
                <ul className="space-y-3">
                  {recentApplications.map((app) => (
                    <li
                      key={app.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <div className="font-medium">{app.name}</div>
                        <div className="text-sm">
                          {app.id} • ${app.amount}
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-sm ${
                          app.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : app.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {app.status}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Loans list - Table for md+, Card list for small screens */}
            <section className="mt-6">
              <h3 className="font-semibold mb-4">All Loans</h3>

              {/* TABLE - visible on md+ */}
              <div className="hidden md:block text-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700 overflow-x-auto">
                <table className="w-full text-left table-auto">
                  <thead>
                    <tr className="text-sm ">
                      <th className="py-2">Title</th>
                      <th>Category</th>
                      <th>Interest</th>
                      <th>Max Limit</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y dark:divide-gray-700">
                    {sampleLoans.map((loan) => (
                      <tr
                        key={loan.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900"
                      >
                        <td className="py-3">{loan.title}</td>
                        <td>{loan.category}</td>
                        <td>{loan.interest}</td>
                        <td>{loan.maxLimit}</td>
                        <td>
                          <div className="flex gap-2">
                            <button className="px-3 py-1 rounded-md border">
                              Edit
                            </button>
                            <button className="px-3 py-1 rounded-md border">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CARD LIST - visible on small */}
              <div className="md:hidden space-y-3">
                {sampleLoans.map((loan) => (
                  <div
                    key={loan.id}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between"
                  >
                    <div className="mb-2 sm:mb-0">
                      <div className="font-medium">{loan.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {loan.category} • {loan.interest}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-semibold">
                        {loan.maxLimit}
                      </div>
                      <div>
                        <button className="px-3 py-1 rounded-md border mr-1">
                          Edit
                        </button>
                        <button className="px-3 py-1 rounded-md border">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
    </div>
  )
}

export default Dashboard