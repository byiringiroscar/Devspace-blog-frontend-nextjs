'use client'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import CardBlog from './CardBlog'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'



const MainList = () => {
  const { ref, inView, entry } = useInView();
  const fetcher = async({ pageParam }: { pageParam: number }) => {
    const res = await fetch(`http://127.0.0.1:8000/blog?page=${pageParam}`)
    return res.json()
  }
  const { data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['blogs'],
    queryFn: fetcher,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => { 
      if(lastPage.next){
        const nextPageInitial = lastPage.next.split("page=")
        const newNextPage = nextPageInitial.slice(-1)[0]
        return newNextPage
      }
      return undefined
      
    },
  })
  const content = data?.pages.map((items: any) => 
      items?.results.map((item: any, index: number) => {
            if(items?.results.length == index + 1){
              return <CardBlog key={item.id} {...item} innerRef={ref} />
            }
            return  <CardBlog key={item.id} {...item}  />
          })
      )
    
      useEffect(()=> {
        if(inView && hasNextPage){
          fetchNextPage()
        }
      }, [inView, hasNextPage, fetchNextPage]);
      if(status === 'pending'){
        return (
            <div className='max-container padding-container'>
                    <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
                    {/* Render loading skeleton */}
                    {[...Array(12)].map((_, index) => (
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
    if(status === 'error'){
      return <div className='max-container padding-container flex items-center justify-center font-bold'>Error {error.message}</div>
      }
  return (
    <section className='bg-[#F2F2F2] max-container padding-container'>
        <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
            {content}
            {isFetchingNextPage && (
              <>
                {[...Array(12)].map((_, index) => (
                        <div key={index} className='p-6 bg-gray-300 rounded-md'>
                        <Skeleton height={150} />
                        <Skeleton height={20} width={120} />
                        <Skeleton height={15} width={80} />
                        </div>
                    ))}
              </>
            )}
        </div>
    </section>
  )
}

export default MainList