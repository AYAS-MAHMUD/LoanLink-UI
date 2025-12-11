import React, { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiLogOut, FiMenu, FiX } from "react-icons/fi";

import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import useRole from "../Hook/useRole";
import Dashboard from "./AdminDashboard/Dashboard";


const MainDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); //aside default vave close takbe
  const { user } = use(AuthContext);
  const { role , roleLoading } = useRole();
 const navigate = useNavigate()
  useEffect(() => {
  if (roleLoading) return; 

  if (role === "manager" || role === "admin") {
    navigate("/dashboard/AMdashboard");
  } 
  else if (role === "borrow") {
    navigate("/dashboard/myloan");
  }
}, [role, roleLoading]);

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Sidebar*/}
        <aside
          aria-label="Sidebar"
          className={`fixed top-0 left-0 h-full text-white bg-gray-800 border-r dark:border-gray-700 transition-transform z-30 transform
             ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 w-72`}
        >
          <div className="h-16 flex items-center px-6 border-b dark:border-gray-700 justify-between">
            <Link to="/" className="text-2xl font-bold  flex ">
              <div className="w-8 h-8 bg-cyan-800 rounded-lg mr-2 flex items-center justify-center  font-bold text-lg">
                L
              </div>
              LoanLink
            </Link>
            {/* close button only visible on mobile when sidebar open */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

          <nav className="p-6">
            <ul className="space-y-2">
              {role === "admin" && (
                <>
                <NavLink to="/dashboard/AMdashboard"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Dashboard
                  </li></NavLink>
                <NavLink to="/dashboard/manageusers"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Manage Users
                  </li></NavLink>
                <NavLink to="/dashboard/allloan"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    All Loan
                  </li></NavLink>
                <NavLink to="/dashboard/loanapplication"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Loan Application
                  </li></NavLink>
                </>
              )}

              {role === "borrow" && (
                <>
                  <NavLink to="/dashboard/myloan"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    My Loan
                  </li></NavLink>
                  <NavLink to="/dashboard/myprofile"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    My Profile
                  </li></NavLink>
                  
                </>
              )}

              {role === "manager" && (
                <>
                  <NavLink to="/dashboard/AMdashboard"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Dashboard
                  </li></NavLink>
                  <NavLink to="/dashboard/addloan"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Add Loan
                  </li></NavLink>
                  <NavLink to="/dashboard/manageloans"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Manage Loans
                  </li></NavLink>
                  <NavLink to="/dashboard/pendingapplication"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Pending Application
                  </li></NavLink>
                  <NavLink to="/dashboard/approvedapplication"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    Approved Application
                  </li></NavLink>
                  <NavLink to="/dashboard/myprofile"><li className="p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    My Profile
                  </li></NavLink>
                </>
              )}
            </ul>
          </nav>
        </aside>

        {/* overlay when sidebar open on mobile */}
        {sidebarOpen && (
          <button
            aria-hidden={!sidebarOpen}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/30 z-20 md:hidden"
          />
        )}

        {/* Main area */}
        <div className="flex-1 md:ml-72 w-full">
          {/* Header */}
          <header className="flex items-center justify-between h-16 px-4 border-b dark:border-gray-700  text-white bg-gray-800 sticky top-0 z-10">
            <div className="flex items-center gap-3">
              {/* menu toggle - visible on mobile */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setSidebarOpen((open) => !open)}
                aria-label="Open menu"
              >
                <FiMenu />
              </button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-3">
              {/* example user area */}
              <div className="flex items-center gap-2">
                <img
                  src={user?.photoURL}
                  alt="avatar"
                  className="w-9 h-9 rounded-full"
                />
                <span className="hidden sm:inline text-sm">
                  {user?.displayName}
                </span>
              </div>

              <Link
                to="/"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Logout"
                title="Logout"
              >
                <FiLogOut />
              </Link>
            </div>
          </header>

          {/* Content area */}
          <Outlet></Outlet>
          
          


        </div>
      </div>
    </div>
  );
};
export default MainDashboard;
