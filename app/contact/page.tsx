import React from 'react'
import Navbar from '../components/Navbar'

const contact = () => {
  return (
    <>
      <Navbar />

      <div className='flex flex-col items-center border border-black p-4 w-1/3 mx-auto rounded'>
        <h2 className='text-4xl font-bold'>Want to contact me?</h2>
        <span>Nothing easier</span>
        <hr className='w-full my-4 border-black' />
        <div className='flex flex-col gap-2'>
          <span>email: louisantonin.lesieur@icloud.com</span>
          <span>phone: 06 79 72 87 89</span>
        </div>
      </div>
    </>
  )
}

export default contact