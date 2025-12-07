import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router";
import { FaPaperPlane } from "react-icons/fa";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import useRole from "../Hook/useRole";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user ,signOutUser} = use(AuthContext);

  // console.log(user);

  // for theme toggle
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  const handleSignOut = ()=>{
    signOutUser()
    .then(res=>{
      console.log(res)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <header className="w-full shadow-sm sm:px-6 backdrop-blur-xl sticky top-0 z-50 ">
      <nav className="  max-w-7xl mx-auto px-3  md:px-0 py-3 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-cyan-900 flex ">
            <div className="w-8 h-8 bg-cyan-800 rounded-lg mr-2 flex items-center justify-center text-white font-bold text-lg">
              L
            </div>
            LoanLink 
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6  py-3 px-5 rounded-full ">
          <NavLink
            to="/"
            className="hover:text-cyan-800 text-md font-semibold "
          >
            Home
          </NavLink>
          <NavLink
            to="/allloan"
            className="hover:text-cyan-800 text-md font-semibold "
          >
            All Loan
          </NavLink>

          <NavLink
            to="/about"
            className="hover:text-cyan-800 text-md font-semibold "
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-cyan-800 text-md font-semibold "
          >
            Contact
          </NavLink>
          {user && (
            <NavLink
              to="/dashboard"
              className="hover:text-cyan-800 text-md font-semibold "
            >
              Dashboard
            </NavLink>
          )}
        </div>

        <div className="flex items-center gap-4">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />
        </div>

        <div className="hidden md:block">
          {user ? (
            <div className="flex gap-3">
              <div>
                <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" />
              </div>
              <button onClick={handleSignOut} className="bg-cyan-800 text-gray-300 flex items-center gap-1 px-4 py-2 rounded-full font-medium hover:bg-cyan-900 ring-2 ring-cyan-500 hover:text-white transition-colors duration-400">
                Sign Out
              </button>
              
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-cyan-800 text-gray-300 flex items-center gap-1 px-4 py-2 rounded-full font-medium hover:bg-cyan-900 ring-2 ring-cyan-500 hover:text-white transition-colors duration-400"
            >
              <FaPaperPlane /> Sign in
            </Link>
          )}
        </div>
        {/* Mobile er jonno toggle icon */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu "
            onClick={() => setOpen((s) => !s)}
            className="text-cyan-800  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3 flex items-center flex-col bg-gray-800 py-5 text-white">
              <NavLink
                to="/"
                className="hover:text-cyan-800 text-md font-semibold "
              >
                Home
              </NavLink>
              <NavLink
                to="/allloan"
                className="hover:text-cyan-800 text-md font-semibold "
              >
                All Loan
              </NavLink>

              <NavLink
                to="/about"
                className="hover:text-cyan-800 text-md font-semibold "
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:text-cyan-800 text-md font-semibold "
              >
                Contact
              </NavLink>
              {user && (
                <NavLink
                  to="/dashboard"
                  className="hover:text-cyan-800 text-md font-semibold "
                >
                  Dashboard
                </NavLink>
              )}
              {user ? (
                <div>
                  <button onClick={handleSignOut} className="bg-cyan-800 text-gray-300 flex items-center gap-1 px-4 py-2 rounded-full font-medium hover:bg-cyan-900 ring-2 ring-cyan-500 hover:text-white transition-colors duration-400">
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-cyan-800 text-gray-300 flex items-center gap-1 px-4 py-2 rounded-full font-medium hover:bg-cyan-900 ring-2 ring-cyan-500 hover:text-white transition-colors duration-400"
                >
                  <FaPaperPlane /> Sign in
                </Link>
              )}
            </div>
            <div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
