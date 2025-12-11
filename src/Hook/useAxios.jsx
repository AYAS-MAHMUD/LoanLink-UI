import axios from "axios";
import {useMemo } from "react";


export const useAxios = () => {
  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: "https://loan-link-server-sooty.vercel.app",
    });
  }, []);

  return axiosInstance;
};
