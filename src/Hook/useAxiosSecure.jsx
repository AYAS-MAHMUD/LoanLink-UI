import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://loan-link-server-sooty.vercel.app",
});

export const useAxiosSecure = () => {
  const { user } = use(AuthContext);
// console.log(user);
// console.log(user?.accessToken);

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user?.accessToken}`;
      return config;
    }, [user]);
  });

  return axiosSecure;
};





