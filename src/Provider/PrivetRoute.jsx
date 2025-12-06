import React, { use } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from './AuthProvider'
import Loading from '../Components/Loading'



const PrivetRoute = ({children}) => {
   const {user,loading} = use(AuthContext)
    const location = useLocation()
    // console.log(location)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.email){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivetRoute