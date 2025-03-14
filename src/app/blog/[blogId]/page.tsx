import { blog_data } from '@/components/blogCard/blog-data'
import React from 'react'
import Blog_Details_Image_Section from './_components/blog-details-image-section'
import Blog_Details_Info_Section from './_components/blog-details-info-section'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ blogId: string }>
  
}

export async function generateMetadata(
  { params }: Props
  
): Promise<Metadata> {
  
  const { blogId } = await params
 
 
  const blog = blog_data.find(blog => blog.id === blogId)! 
 
  
 
  return  {
    title: blog.title,
    description: blog.card_content,
    openGraph: {
      title: blog.title,
      description: blog.card_content,
      url: `https://kalaairis/blog/${blogId}`,
      images: [{ url: 'https://kalaairis/blog/_next/image?url=%2FKalaa-Iris-white-01.png&w=256&q=75', width: 500, height: 500, alt: blog.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.card_content,
      images: ['https://kalaairis/blog/_next/image?url=%2FKalaa-Iris-white-01.png&w=256&q=75'],
    },
  };
}


export default async function BlogDetailsPage({params}: {params: Promise<{ blogId: string }>}) {

    const { blogId} = await params
    
    const blog = blog_data.find(blog => blog.id === blogId)! 
   
  return (
    <section className='blog-details-page p-4 lg:p-12 flex lg:flex-row flex-col gap-6'>
      <Blog_Details_Image_Section {...blog}/>
      <Blog_Details_Info_Section {...blog} />
    </section>
  )
}
