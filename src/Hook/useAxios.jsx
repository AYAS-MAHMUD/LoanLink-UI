import axios from "axios";
import {useMemo } from "react";


export const useAxios = () => {
  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: "http://localhost:3000",
    });
  }, []);

  return axiosInstance;
};
