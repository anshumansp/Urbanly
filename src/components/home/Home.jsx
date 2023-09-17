import React from 'react'
import Hero from './Hero/Hero'
import Featured from './featured/Featured'
import Recent from './recent/Recent'
import Awards from './awards/Awards'
import Location from './location/Location'
import Team from './team/Team'

const Home = () => {
  return (
    <>
        <Hero />
        <Featured />
        <Recent />
        <Awards />
        <Location />
        <Team />
    </>
  )
}

export default Home
