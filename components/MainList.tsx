import React from 'react'
import Image from 'next/image'
import python from '../public/react.jpg'


const MainList = () => {
  return (
    <section className='bg-white max-container padding-container'>
        <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
            <div className='flex flex-col gap-3'>
                <Image src={python} alt='image' className='w-full h-[200px] object-cover' />
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>DevSpace</h1>
                <p className='text-[#191919] font-robot-300 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <Image src={python} alt='image' className='w-full h-[200px] object-cover' />
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>DevSpace</h1>
                <p className='text-[#191919] font-robot-300 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <Image src={python} alt='image' className='w-full h-[200px] object-cover' />
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>DevSpace</h1>
                <p className='text-[#191919] font-robot-300 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <Image src={python} alt='image' className='w-full h-[200px] object-cover' />
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>DevSpace</h1>
                <p className='text-[#191919] font-robot-300 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
            </div>
        </div>
    </section>
  )
}

export default MainList