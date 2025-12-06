import React from 'react'
import Hero from './Hero'
import { HowItWork } from './HowItWork'
import { Testimonials } from './Testimonials'
import MainSection from '../main/MainSecion'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <MainSection/>
      <HowItWork/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default Home