import React from 'react'
import Image from 'next/image'
import python from '../public/react.jpg'


type BlogType = {
    id: string,
    title: string,
    blog_image: string,
    body: string,
    created_at: string,
}



const CardBlog = ({
    id,
    title,
    blog_image,
    body,
    created_at,
}: BlogType) => {
  return (
    <div className='flex flex-col gap-3 bg-white p-2 rounded'>
                <Image src={blog_image} width={50} height={50} alt='image' className='w-full h-[200px] rounded' />
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>{title}</h1>
                <p className='text-[#191919] font-robot-300 text-[14px]'>{body}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-[#191919] font-robot-300 text-[14px]'>{created_at}</p>
                    <button className='bg-[#FF3B1D] text-white rounded-md px-3 py-1 font-robot-500 text-[12px]'>Read</button>
                    </div>
            </div>
  )
}

export default CardBlog