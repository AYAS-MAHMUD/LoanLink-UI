import React from 'react'
import useRole from '../Hook/useRole'
import Loading from '../Components/Loading'
import Dashboard from '../Dashboard/AdminDashboard/Dashboard'
import { useNavigate } from 'react-router'

const AdminPrivet = () => {
    const {role ,roleLoading} = useRole()
    const navigate = useNavigate()
    if(roleLoading){
        return <Loading/>
    }
    if(role!=='admin'){
        return navigate('/')
    }
}

export default AdminPrivet