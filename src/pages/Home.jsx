import React from 'react'
import Nav from '../components/Nav'
import LoveHero from '../components/LoveHero'
import SideNav from '../components/SideNav'
import Promise from '../components/Promise'

const Home = () => {
  return (
    <div className='bg-red-500 min-h-screen'>
        <Nav />
        <SideNav />
        <LoveHero />
    </div>
  )
}

export default Home