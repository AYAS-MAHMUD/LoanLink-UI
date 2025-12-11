import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

export const useAxiosSecure = () => {
  const { user } = use(AuthContext);
console.log(user);
// console.log(user?.accessToken);

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user?.accessToken}`;
      return config;
    }, [user]);
  });

  return axiosSecure;
};





