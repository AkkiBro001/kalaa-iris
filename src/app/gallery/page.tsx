import Container from '@/components/container/container'
import CategoryCard from '@/components/gallery/categoryCard'
import { GalleryBanner } from '@/components/gallery/galleryBanner'
import { category_details } from '@/components/gallery/galleryData'
import GalleryHeader from '@/components/gallery/galleryHeader'
import React from 'react'

export default function Gallery() {
  return (
    <section className='min-h-screen'>
      <GalleryBanner />
      <Container className='p-4 min-h-screen flex flex-col justify-center'>
        <GalleryHeader/>
        <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pb-5 px-1 gap-5 lg:gap-8'>
          {
            category_details.map(category => <CategoryCard key={category.short_code} {...category}/>)
          }
          
          
        </section>
      </Container>
        
    </section>
  )
}
