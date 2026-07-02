import React from 'react'
import HeroContent from './HeroContent'
import HeroPlantCard from './HeroPlantCard'


const Hero = () => {
  return (
    <section className="mx-5 md:mt-10 md:flex md:justify-between">
      <HeroContent/>
      <HeroPlantCard />
    </section>
  )
}

export default Hero
