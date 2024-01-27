'use clients'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const PageHeader = () => {
  return (
    <div className='w-full pt-10 pb-12 bg-[#191919] flex flex-col gap-3 items-center'>
        <h1 className='text-white font-dancing-700 text-4xl'>Welcome to our Blogs</h1>
        <p className='text-white font-robot-300 text-[14px]'>We build amazing blogs</p>
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Add blog</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                <div className="space-y-2">
                    <h4 className="font-medium leading-none">Add Blog</h4>
                    <p className="text-sm text-muted-foreground">
                    Add blog based on your ideas
                    </p>
                </div>
                <div className="grid gap-2">
                    <form className='
                    flex
                    flex-col
                    gap-4
                    
                    '>
                    <input
                    type="text"
                    name='title'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                    placeholder="Blog title"
                    />
                    <textarea
                    name='body'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                    placeholder="Blog description"
                    />
                    <input
                    type="file"
                    name='blog_image'
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                    placeholder="Blog image"
                    />

                    <div className="flex justify-end">
                    <Button variant="outline">Add blog</Button>
                    </div>
                    </form>
                </div>
                </div>
            </PopoverContent>
            </Popover>
    </div>
  )
}

export default PageHeader