import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase.init'
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    console.log(user)


// Register
const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signInGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
const signOutUser = ()=>{
    return signOut(auth)
}
// Login
const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}





// Observer
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])

const authInfo={
    user,signInUser,createUser,signInGoogle,signOutUser
}
  return <AuthContext value={authInfo}>
    {children}
  </AuthContext>
}

export default AuthProvider