import axios from "axios"
import { use, useMemo } from "react"
import { AuthContext } from "../Provider/AuthProvider"






export const useAxiosSecure =()=>{
    const {user} =use(AuthContext)
    const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: "http://localhost:3000",
    });
  }, []);
    
    axiosInstance.interceptors.request.use((config)=>{
        config.headers.authorization = `Bearer ${user?.accessToken}`
        return config
    })

    return axiosInstance;
}