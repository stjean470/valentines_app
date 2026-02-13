import { Button } from 'flowbite-react'
import React from 'react'

const Promise = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-4xl font-bold text-white'>I Promise You WIll Like it?</h1>
        <Button className='ml-4 mt-4' color='pink' href='/will-you'>Come See!</Button>
    </div>
  )
}

export default Promise