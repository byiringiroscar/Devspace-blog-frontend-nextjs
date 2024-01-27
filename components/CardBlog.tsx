import React from 'react'
import Image from 'next/image'
import python from '../public/react.jpg'

const CardBlog = () => {
  return (
    <div className='flex flex-col gap-3 bg-white p-2 rounded'>
                <Image src={python} alt='image' className='w-full h-[200px] object-cover rounded' />
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>DevSpace</h1>
                <p className='text-[#191919] font-robot-300 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
            </div>
  )
}

export default CardBlog