import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import { Footer } from '../Components/Footer';


const Rootlayout = () => {
  return (
    <div>
        <Navbar/>
        <main className=''>
          <Outlet/> 
        </main>
        <Footer/>
    </div>
  )
}

export default Rootlayout