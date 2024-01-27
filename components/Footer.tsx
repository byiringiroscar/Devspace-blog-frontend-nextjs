import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#191919] w-full padding-container flex flex-col gap-10 lg:flex-row lg:justify-between pt-5 pb-5'>
        <Link href='/' className=''>
            <span className='text-[#FF3B1D] font-dancing-700 text-2xl'>Dev</span> <span className='font-robot-500 text-white'>Space</span>
        </Link>

        <div className='flex flex-col gap-2'>
           <p className='text-white font-robot-900'>What we do</p>
           <ul className='flex flex-col gap-1'>
                <li className='text-white font-robot-300 text-[12px]'>Web Development</li>
                <li className='text-white font-robot-300 text-[12px]'>Mobile Development</li>
                <li className='text-white font-robot-300 text-[12px]'>UI/UX Design</li>
                <li className='text-white font-robot-300 text-[12px]'>Branding</li>
           </ul>

        </div>
        <div className='flex flex-col gap-2'>
           <p className='text-white font-robot-900'>What we do</p>
           <ul className='flex flex-col gap-1'>
                <li className='text-white font-robot-300 text-[12px]'>Web Development</li>
                <li className='text-white font-robot-300 text-[12px]'>Mobile Development</li>
                <li className='text-white font-robot-300 text-[12px]'>UI/UX Design</li>
                <li className='text-white font-robot-300 text-[12px]'>Branding</li>
           </ul>

        </div>
        <div className='flex flex-col gap-2'>
           <p className='text-white font-robot-900'>What we do</p>
           <ul className='flex flex-col gap-1'>
                <li className='text-white font-robot-300 text-[12px]'>Web Development</li>
                <li className='text-white font-robot-300 text-[12px]'>Mobile Development</li>
                <li className='text-white font-robot-300 text-[12px]'>UI/UX Design</li>
                <li className='text-white font-robot-300 text-[12px]'>Branding</li>
           </ul>

        </div>
        <div className='flex flex-col gap-2'>
           <p className='text-white font-robot-900'>What we do</p>
           <ul className='flex flex-col gap-1'>
                <li className='text-white font-robot-300 text-[12px]'>Web Development</li>
                <li className='text-white font-robot-300 text-[12px]'>Mobile Development</li>
                <li className='text-white font-robot-300 text-[12px]'>UI/UX Design</li>
                <li className='text-white font-robot-300 text-[12px]'>Branding</li>
           </ul>

        </div>
        <div className='flex flex-col gap-2'>
           <p className='text-white font-robot-900'>Subscribe</p>
            <input type='text' placeholder='Enter your email' className='bg-[#2A2A2A] border border-[#FF3B1D] rounded-md px-2 py-1 text-white font-robot-300 text-[12px]' />
            <button className='bg-[#FF3B1D] text-white rounded-md px-3 py-1 font-robot-500 text-[12px]'>Subscribe</button>

        </div>




    </div>
  )
}

export default Footer