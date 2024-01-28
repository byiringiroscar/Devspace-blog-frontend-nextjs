import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type BlogType = {
    id: string,
    title: string,
    blog_image: string,
    body: string,
    created_at: string,
    innerRef?: React.Ref<HTMLAnchorElement>
}



const CardBlog = ({
    id,
    title,
    blog_image,
    body,
    created_at,
    innerRef
}: BlogType) => {
    // slice 20 character in body
    body = body.slice(0, 100) + '...'
    // get date only
    const formattedDate = new Date(created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

  return (
    <Link href={`/blogs/${id}`} ref={innerRef} className='flex flex-col gap-3 bg-white p-2 rounded'>
                <Image src={blog_image} width={50} height={50} alt='image' className='w-full h-[200px] rounded' />
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>{title}</h1>
                <p className='text-[#191919] font-robot-300 text-[14px]'>{body}</p>
                <div className='flex justify-between items-center'>
                    <p className='text-[#191919] font-robot-300 text-[14px]'>{formattedDate}</p>
                    <button className='bg-[#FF3B1D] text-white rounded-md px-3 py-1 font-robot-500 text-[12px]'>Read</button>
                    </div>
            </Link>
  )
}

export default CardBlog