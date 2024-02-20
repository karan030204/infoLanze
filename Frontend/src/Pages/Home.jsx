import React from 'react'
import About_home from '../Components/Home/About_home'
import Hero_Carousel from '../Components/Home/Hero_Carousel'
import Home_Options from '../Components/Home/Home_Options'
import Past_Exhibitors from '../Components/Home/Past_Exhibitors'
import '../Elements/Home.css'

const Home = () => {
  return (
    <div >
      <Hero_Carousel/>
      <Home_Options/>
      <About_home/>
      <Past_Exhibitors/>
      </div>
  )
}

export default Home