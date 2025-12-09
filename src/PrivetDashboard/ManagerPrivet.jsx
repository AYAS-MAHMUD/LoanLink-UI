import React from 'react'
import { useNavigate } from 'react-router'
import useRole from '../Hook/useRole'
import Loading from '../Components/Loading'

const ManagerPrivet = () => {
  const {role ,roleLoading} = useRole()
    const navigate = useNavigate()
    if(roleLoading){
        return <Loading/>
    }
    if(role!=='manager'){
        return navigate('/')
    }
}

export default ManagerPrivet