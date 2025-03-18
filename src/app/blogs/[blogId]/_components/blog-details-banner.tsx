import { blog_data_type } from '@/components/blogCard/blog-data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Blob_Details_Banner({blog_banner_image, title, className=""}:blog_data_type & {className?: string}) {
    if(!blog_banner_image) return null
  return (
    <div className={cn('h-[300px] overflow-hidden relative flex items-center justify-center', className)}>
      <Image width={1920} height={900} src={blog_banner_image} alt="blog-banner" className='w-full h-full opacity-20 object-fill'/>
      <h2 className='absolute z-[10] text-2xl md:text-4xl text-primaryColor text-center p-4 text-balance'>{title}</h2>
    </div>
  )
}
