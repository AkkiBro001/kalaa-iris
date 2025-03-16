import React from 'react'

import { blog_data_type } from '../blog-data'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, MoveRight } from 'lucide-react'


export default function Blog_Details_Section({title, card_content, date, id}: blog_data_type) {
  return (
    <div className='blog-details-section flex flex-col gap-4'>
      <section className='details'>
        <h2 className='text-primaryColor text-xl mb-1'>{title}</h2>
        <p className='opacity-50 text-sm mb-4 italic flex gap-1 items-center'>
        <Calendar className='size-4 '/>
          <span>{date}</span>
        </p>
        <p className='opacity-75'>

          {card_content}
        </p>
      </section>
      <Link href={`/blogs/${id}`}>
      <Button>
        <span>Read More</span>
        <MoveRight />
      </Button>
      </Link>
    </div>
  )
}
