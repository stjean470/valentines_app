import React from 'react'
import Nav from '../components/Nav'
import SideNav from '../components/SideNav'
import ValentineCarousel from '../components/ValentineCarousel'
const Presentation = () => {
  return (
    <>
        <Nav />
        <SideNav />
        <div className='bg-blue-300'>
            <ValentineCarousel />
        </div>
        
    </>
  )
}

export default Presentation