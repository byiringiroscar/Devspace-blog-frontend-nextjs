'use client'
import React from 'react'
import { notFound } from 'next/navigation'
import useSWR from 'swr'
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const fetcher = async(id: any) => {
    const res = await fetch(`https://devspace-60v7.onrender.com/blog/${id}`)
    const data = await res.json()
    return data
}

const BlogDetail = () => {
    const pathname = usePathname();
    const router = useRouter();
    const id = pathname.split('/').slice(-1)[0];
    const { data, error, isLoading }  = useSWR(id, fetcher)
    const formattedDate = new Date(data?.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
  return (
    <>
      <div className='w-full pt-10 pb-12 bg-[#191919] flex flex-col gap-3 items-center'>
          <h1 className='text-[#FF3B1D] font-dancing-700 text-lg lg:text-[25px]'>Blog Details</h1>
          <p className='text-white font-robot-300 text-[14px]'>We build amazing blogs</p>
      </div>
      <div className='max-container padding-container'>
        {isLoading ? ( 
            <div className='p-4 bg-gray-300 rounded-md'>
                <Skeleton height={15} width={100} />
                <Skeleton height={50}  />
                <Skeleton height={300} />
            </div>
        ): error ? (
            notFound()
        ): (
            <div className='flex flex-col gap-3'>
                <h1 className='text-[#FF3B1D] font-dancing-700 text-2xl'>{data.title}</h1>
                <p className='text-white font-robot-300 text-[14px]
                '>{data.body}</p>
                <Image src={data.blog_image} alt="image" width={200} height={0} style={{ width: '100%', height: '300px' }} className='w-full h-[200px] lg:h-[400px] object-cover rounded' />
                <div className='flex gap-2'>
                    <p className='text-white font-robot-300 text-[14px]'>Published on</p>
                    <p className='text-[#FF3B1D] font-robot-300 text-[14px]'>{formattedDate}</p>
                </div>
                  
            </div>
        )}
      </div>
    </>
  )
}

export default BlogDetail