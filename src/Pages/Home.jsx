import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Home/Hero'
import Destinations from '../Components/Home/Destinations'
import FeaturedTours from '../Components/Home/FeaturedTours'
import AboutUs from '../Components/Home/AboutUs'
import Post from '../Components/Home/Post'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <FeaturedTours />
      <AboutUs />
      <Post />
      <Footer />
    </div>
  )
}

export default Home