import React from 'react'

const BlogDetail = () => {
  return (
    <>
      <div className='w-full pt-10 pb-12 bg-[#191919] flex flex-col gap-3 items-center'>
          <h1 className='text-white font-dancing-700 text-lg lg:text-[25px]'>Blog Details</h1>
          <p className='text-white font-robot-300 text-[14px]'>We build amazing blogs</p>
      </div>
      <div className='max-container padding-container'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>Blog Title</h1>
                <p className='text-white font-robot-300 text-[14px]
                '>Lorem ipsum dolar sit amet, consectetur adipisicing elit. Necessitatibus, voluptas.</p>
                <img src="https://images.pexels.com/photos/3768164/pexels-photo-3768164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image" className='w-full h-[200px] lg:h-[400px] object-cover rounded' />
                  
            </div>
      </div>
    </>
  )
}

export default BlogDetail