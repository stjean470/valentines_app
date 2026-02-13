import React from 'react'
import LoveHeart from '../assets/valentineHeartOnBook.jpg'
import { Button } from 'flowbite-react'
const LoveHero = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'
        style={{
            backgroundImage: `url(${LoveHeart})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '85vh'
        }}>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='md:text-4xl sm:text-2xl text-xl font-bold text-white'>Are You Ready?</h1>
          <Button className='ml-4 mt-4' color='pink' href='/will-you'>Come See!</Button>
        </div>
        
    </div>
  )
}

export default LoveHero