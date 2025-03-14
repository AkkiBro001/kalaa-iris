import { blog_data } from '@/components/blogCard/blog-data'
import React from 'react'
import Blog_Details_Image_Section from './_components/blog-details-image-section'
import Blog_Details_Info_Section from './_components/blog-details-info-section'

export default async function BlogDetailsPage({params}: {params: Promise<{ blogId: string }>}) {

    const { blogId} = await params

    const blog = blog_data.find(blog => blog.id === blogId)! 
   
  return (
    <section className='blog-details-page p-4 lg:p-12 flex md:flex-row flex-col gap-6'>
      <Blog_Details_Image_Section {...blog}/>
      <Blog_Details_Info_Section {...blog}/>
    </section>
  )
}
