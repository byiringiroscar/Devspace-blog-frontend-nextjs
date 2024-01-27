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

                </div>
                </div>
            </PopoverContent>
            </Popover>
    </div>
  )
}

export default PageHeader