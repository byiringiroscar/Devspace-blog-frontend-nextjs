import React from 'react'

const PageHeader = () => {
  return (
    <div className='w-full pt-10 pb-12 bg-[#191919] flex flex-col gap-3 items-center'>
        <h1 className='text-white font-dancing-700 text-4xl'>DevSpace</h1>
        <p className='text-white font-robot-300 text-[14px]'>We build amazing blogs</p>
        <button className='bg-[#FF3B1D] text-white rounded-md px-3 py-1 font-robot-500 text-[12px]'>Let&apos;s talk</button>
    </div>
  )
}

export default PageHeader