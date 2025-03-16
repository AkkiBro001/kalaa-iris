import React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { blog_data } from '../blogCard/blog-data'

export default function BlogPrevNextBtn({id, btn_type}: {btn_type: "next" | "prev", id: number}) {
   
   const blog = blog_data[btn_type === "prev" ? id - 1 : id + 1]
   
   if(!blog) return null

  return (
    <Link href={`/blogs/${blog.id}`} 
    className={cn('flex gap-3 items-center p-2 border border-white rounded-lg md:max-w-[400px] max-w-full w-full hover:text-black hover:bg-white', btn_type === "next" && "flex-row-reverse ml-auto")}
    >
      <div className='btn-arrows'>
        {btn_type === "prev" ?  <ChevronLeft /> : <ChevronRight />}
      
      
      </div>
      <Image src = {blog.images[0]} width={300} height={200} alt="btns" className='w-[80px] h-[60px] object-cover rounded-lg'/>
      <div className={cn('text-left flex flex-col', btn_type === "next" && 'text-right')}>
        <span className='text-[13px] opacity-50 tracking-wider'>{btn_type === "prev" ? "Previous blog" : "Next blog"}</span>
        <span>{blog.title}</span>
    </div>
    </Link>
  )
}
