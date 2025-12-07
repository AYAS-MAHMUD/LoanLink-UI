import React, { use } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { useAxios } from './useAxios'
import { useQuery } from '@tanstack/react-query';


const useRole = () => {
    const {user} = use(AuthContext)
    const axiosSecure = useAxios()

    const {data : role ='borrow',isLoading : roleLoading} = useQuery({
        queryKey : ['user-role',user?.email],

        queryFn : async()=>{
            const res = await axiosSecure.get(`/users/${user?.email}/role`)
            return res.data.role
        }
    })
    console.log(role)
  return {role,roleLoading}
}

export default useRole