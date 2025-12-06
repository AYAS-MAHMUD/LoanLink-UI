import React, { use } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Image as ImageIcon } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";

export default function Register() {
    const {createUser, signInGoogle} = use(AuthContext)
    const navigation = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleRegisterSubmit(data) {
    console.log(data.email,data.password);
    createUser(data.email,data.password)
    .then(() => {
        alert("Register Successfully")
        navigation("/");
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Registered — check console for payload");
  }
  const handleGoogleLogin=()=>{
    signInGoogle()
    .then(res=>{
        alert("Sign in with google successfully")
        console.log(res)
        navigation('/')
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="min-h-screen  flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md  rounded-2xl shadow-lg border border-slate-100 p-8"
      >
        <div className="flex flex-col items-center mb-4">
          <div className="w-14 h-14 rounded-xl bg-cyan-800 flex items-center justify-center text-white font-bold text-xl mb-4">
            L
          </div>
          <h1 className="text-2xl font-extrabold ">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500">
            Already have an account?{" "}
            <a href="/login" className="text-sky-600 font-medium">
              Sign in
            </a>
          </p>
        </div>

        
        <form
          className="mt-4 space-y-4"
          onSubmit={handleSubmit(handleRegisterSubmit)}
        >
          <div>
            <label className="block text-sm font-medium  mb-2">Name</label>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <User className="text-slate-400" />
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your full name"
                className="w-full bg-transparent outline-none text-sm text-slate-700"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium  mb-2">Email</label>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <Mail className="text-slate-400" />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="you@example.com"
                type="email"
                className="w-full bg-transparent outline-none text-sm text-slate-700"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium  mb-2">Photo URL</label>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <ImageIcon className="text-slate-400" />
              <input
                {...register("photoURL", {
                  required: "Photo URL is required",
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\w\d\-]+\.)+[\w\d\-]+(\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
                    message: "Enter a valid URL",
                  },
                })}
                placeholder="https://..."
                className="w-full bg-transparent outline-none text-sm text-slate-700"
              />
            </div>
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">{errors.photoURL.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium  mb-2">Role</label>
            <div className="bg-slate-50 rounded-xl px-4 py-2 border border-slate-100">
              {/* register the select field and make it required */}
              <select
                {...register("role", { required: "Role is required" })}
                className="w-full bg-transparent outline-none text-sm text-slate-700"
                defaultValue=""
              >
                <option value="">Select Role</option>
                <option value="borrower">Borrower</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium  mb-2">Password</label>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <Lock className="text-slate-400" />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
                placeholder="Create a password"
                type="password"
                className="w-full bg-transparent outline-none text-sm text-slate-700"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-cyan-800 text-white py-3 rounded-xl text-lg font-semibold shadow-inner hover:brightness-105"
          >
            Register →
          </button>
        </form>

        <div className="flex items-center gap-4 my-5">
          <hr className="flex-1 border-slate-200" />
          <p className="text-sm text-slate-400">Or continue with</p>
          <hr className="flex-1 border-slate-200" />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button onClick={handleGoogleLogin}
            type="button"
            className="flex hover:text-white items-center justify-center gap-3 border border-sky-700 hover:bg-cyan-800 transition ease-in-out py-3 rounded-xl font-medium"
          >
            <FaGoogle className="w-5 h-5" />
            Continue with Google
          </button>
        </div>
      </motion.div>
    </div>
  );
}
