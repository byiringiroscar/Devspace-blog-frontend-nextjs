'use client'
import React from 'react'
import CardBlog from './CardBlog'
import useSWR from 'swr'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const fetcher = async(id: any) => {
    const res = await fetch(`http://127.0.0.1:8000/blog`)
    const data = await res.json()
    return data
  }



const MainList = () => {
    const { data, error, mutate, isLoading }  = useSWR('home', fetcher)	
    if (isLoading) {
        return (
            <div className='max-container padding-container'>
                    <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
                    {/* Render loading skeleton */}
                    {[...Array(16)].map((_, index) => (
                        <div key={index} className='p-6 bg-gray-300 rounded-md'>
                        <Skeleton height={150} />
                        <Skeleton height={20} width={120} />
                        <Skeleton height={15} width={80} />
                        </div>
                    ))}
                    </div>
                </div>
        )
    }
    if (error) {
        return (
          <div className='max-container padding-container'>
            <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
              <div className='error-card'>
                <h3 className='text-center'>There was an error while fetching the data</h3>
              </div>
            </div>
          </div>
        );
      }
  return (
    <section className='bg-[#F2F2F2] max-container padding-container'>
        <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
        {data.map((item: any) => (
                <CardBlog key={item.id} {...item} />
            ))}
        </div>
    </section>
  )
}

export default MainList