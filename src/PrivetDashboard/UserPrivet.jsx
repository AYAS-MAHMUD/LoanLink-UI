import React from 'react'
import useRole from '../Hook/useRole'
import Loading from '../Components/Loading'
import { useNavigate } from 'react-router'

const UserPrivet = ({children}) => {
    const {role ,roleLoading} = useRole()
    const navigate = useNavigate()
    if(roleLoading){
        return <Loading/>
    }
    if(role!=='borrow'){
        return navigate('/')
    }else{
        return children
    }
}

export default UserPrivet