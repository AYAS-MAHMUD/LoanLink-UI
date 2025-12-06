import React from 'react'
import Hero from './Hero'
import { HowItWork } from './HowItWork'
import { Testimonials } from './Testimonials'
import MainSection from '../main/MainSecion'

const Home = () => {
  return (
    <div>
      <Hero/>
      <MainSection/>
      <HowItWork/>
      <Testimonials/>
    </div>
  )
}

export default Home