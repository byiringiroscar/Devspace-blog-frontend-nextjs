'use client'
import React, {useState} from 'react'
import useSWR from 'swr'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LineWave } from 'react-loader-spinner'

const fetcher = async() => {
  const res = await fetch(`http://127.0.0.1:8000/blog/`)
  const data = await res.json()
  return data
}

const addBlog = async (dataBody: any) => {
  const res = await fetch(`http://127.0.0.1:8000/blog/`, {
    method: 'POST',
    body: dataBody,
  });
  const addData = await res.json();
  return addData;
};


const PageHeader = () => {
  const [ loading, setLoading ] = useState(false)
  const [updateError, setupdateError] = useState({
    title: '',
    body: '',
    blog_image: '',
  
  })
  const [newData, setnewData] = useState({
    title: '',
    body: '',
    blog_image: ''
  });
  const clearErrorsAfterDelay = () => {
    setTimeout(() => {
        setupdateError({
            title: '',
            body: '',
            blog_image: '',
        });
    }, 5000); // 5000 milliseconds = 5 seconds
};
const handleImageChange = (e: any) => {
  setnewData({ ...newData, blog_image: e.target.files[0] });
};
  const handleChange = (e: any) => {
    if (e.target.name === 'blog_image') {
      console.log(e.target.files[0])
      console.log(e.target.files)
      setnewData({ ...newData, blog_image: e.target.files[0]});
    } else {
      setnewData({ ...newData, [e.target.name]: e.target.value });
    }
  };
  const { data, error, mutate, isLoading }  = useSWR('home', fetcher)

  const addNewBlog = async (e: any) => {
    e.preventDefault();
    setLoading(true)
    let form_data = new FormData();
    form_data.append('blog_image', newData.blog_image);
    form_data.append('title', newData.title);
    form_data.append('body', newData.body);

    try{
      const updatedData = await addBlog(form_data);
      if(updatedData.id){
        setLoading(false)
        toast('Data Updated', {
            hideProgressBar: true,
            autoClose: 2000,
            type: 'success'
          });
          mutate();
          setnewData({ title: '', body: '', blog_image: '' });
          e.target.reset()

      }else{
        setLoading(false)
        const error = updatedData
            setupdateError({
                title: error.title ? error.title[0] : '',
                body: error.body ? error.body[0] : '',
                blog_image: error.blog_image ? error.blog_image[0] : '',
            })
            toast('Data Failed to Update', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'error'
            });
            clearErrorsAfterDelay();
      }

    }
    catch (err) {
      setLoading(false)
      toast('Data Failed to Update', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error'
    });

    }
    }
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
                      <form 
                      onSubmit={addNewBlog}
                      className='
                      flex
                      flex-col
                      gap-4
                      
                      '>
                      <input
                      onChange={handleChange}
                      type="text"
                      name='title'
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                      placeholder="Blog title"
                      />
                      <div className='w-full'>
                                      {updateError.title ? (<span className='text-red-500 transition-all'>{updateError.title}</span>): ''}
  
                                      </div>
                      <textarea
                      onChange={handleChange}
                      name='body'
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                      placeholder="Blog description"
                      />
                      <div className='w-full'>
                                      {updateError.body ? (<span className='text-red-500 transition-all'>{updateError.body}</span>): ''}
  
                                      </div>
                      <input
                      onChange={handleImageChange}
                      type="file" accept="image/png, image/jpeg"
                      name='blog_image'
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 focus:outline-none"
                      placeholder="Blog image"
                      />
                      <div className='w-full'>
                                      {updateError.blog_image ? (<span className='text-red-500 transition-all'>{updateError.blog_image}</span>): ''}
  
                                      </div>
  
                      <div className="flex justify-end">
                      <Button variant="outline" type='submit'>{loading ? (<LineWave
  visible={true}
  height="40"
  width="40"
  color="#4fa94d"
  ariaLabel="line-wave-loading"
  wrapperStyle={{}}
  wrapperClass=""
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
  />): 'Add Data'}</Button>
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