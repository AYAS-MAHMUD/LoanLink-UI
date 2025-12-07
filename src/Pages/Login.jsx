import React, { use } from "react";
import { color, motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // use react-router-dom
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { useAxios } from "../Hook/useAxios";

export default function Login() {
  const axios = useAxios()
    const navigation = useNavigate()
    const {signInUser,signInGoogle, passwordReset,user} = use(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data) => {
    // replace with real auth call
    console.log("login payload:", data);
    signInUser(data.email,data.password)
    .then(res=>{
        alert("Login Successfully")
        console.log(res)
        navigation('/')
    })
    .catch(error=>{
      console.log(error)
    })
    
  };
  const handlegoogleLogin=()=>{
    signInGoogle()
    .then(res=>{
        alert("Login successfully")
        // console.log(res)
        navigation('/')
        const userInfo = {
          email : res.user.email,
          name : res.user.displayName,
          photoURL : res.user.photoURL,
        }
        axios.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log("user created in the database")
          }
        })
    })
    .catch(error=>{
        console.log(error)
    })
  }
  const handleResetPass=()=>{
    console.log('forget')
    passwordReset()
    .then(res=>{
        alert("Please Cheak your Gmail")
        console.log(res)
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 ">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md rounded-2xl shadow-lg border border-slate-100 p-8"
      >
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-xl bg-cyan-800 flex items-center justify-center text-white font-bold text-xl mb-4">
            L
          </div>

          <h1 className="text-3xl font-extrabold">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-sky-600 font-medium">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* use react-hook-form submit handler */}
        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <Mail className="text-slate-400" />
              <input
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">Password</label>
              <button onClick={handleResetPass} className="text-sm underline text-sky-600">
                Forgot password?
              </button>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <Lock className="text-slate-400" />
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className="w-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* REMEMBER */}
          <div className="flex items-center gap-3">
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                {...register("remember")}
                className="w-4 h-4 rounded border-slate-200"
              />
              Remember me
            </label>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 bg-cyan-800 text-white py-3 rounded-xl text-lg font-semibold shadow-inner hover:brightness-105 disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign in →"}
          </button>

          <div className="flex items-center gap-4">
            <hr className="flex-1 border-slate-200" />
            <p className="text-sm text-slate-400">Or continue with</p>
            <hr className="flex-1 border-slate-200" />
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button
            
              type="button"
              onClick={handlegoogleLogin}
              className="flex items-center justify-center gap-3 border border-sky-700 hover:bg-cyan-800 hover:text-white transition ease-in-out py-3 rounded-xl font-medium"
            >
              <FaGoogle className="w-5 h-5" />
              Continue with Google
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
