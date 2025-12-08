// FullScreenProfileCard.jsx
import React, { use } from "react";
import { motion } from "framer-motion";
import { FiLogOut, FiMail, FiUser } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";

const  Myprofile=()=> {
    const {user, signOutUser} = use(AuthContext)
  const handleSignOut = ()=>{
    signOutUser()
    .then(res=>{
      console.log(res)
      alert("Sign Out Successfully")
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md rounded-3xl bg-cyan-900 backdrop-blur border border-white/20 shadow-2xl p-8 text-center text-white"
      >
        {/* Glow effect */}
        <div className="absolute -inset-0.5 rounded-3xl  blur -z-10" />

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="relative mx-auto w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl"
        >
          <img
            src={user?.imageURL}
            alt={user?.displayName}
            className="w-full h-full object-cover"
            
          />
        </motion.div>

        {/* Info */}
        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-extrabold tracking-wide flex items-center justify-center gap-2">
            <FiUser className="text-cyan-300" />
            {user?.displayName}
          </h2>

          <p className="text-sm text-cyan-100 flex items-center justify-center gap-2">
            <FiMail className="text-cyan-300" />
            {user?.email}
          </p>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/20 my-6" />

        {/* Logout Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSignOut}
          className="group relative w-full overflow-hidden rounded-xl bg-cyan-800 px-6 py-3 font-semibold text-white shadow-lg"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <FiLogOut />
            Logout
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition" />
        </motion.button>
      </motion.div>
    </div>
  );
}
export default Myprofile;