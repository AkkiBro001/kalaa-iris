import Container from '@/components/container/container'
import CategoryCard from '@/components/gallery/categoryCard'
import { GalleryBanner } from '@/components/gallery/galleryBanner'
import { category_details } from '@/components/gallery/galleryData'
import CommonHeader from '@/components/commonHeader'
import React from 'react'

export default function Gallery() {
  return (
    <section className='min-h-screen'>
      <GalleryBanner />
      <Container className='p-4 min-h-screen flex flex-col justify-center'>
        <CommonHeader title="Categories"/>
        <section className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 pb-5 px-1 gap-5 lg:gap-8'>
          {
            category_details.map(category => <CategoryCard key={category.short_code} {...category}/>)
          }
          
          
        </section>
      </Container>
        
    </section>
  )
}
