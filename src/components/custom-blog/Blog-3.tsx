import React from 'react'
import { blog_data_type } from '../blogCard/blog-data'
import Blob_Details_Banner from '@/app/blogs/[blogId]/_components/blog-details-banner'
import { Calendar } from 'lucide-react'
import { format } from 'date-fns'
import Image from 'next/image'
import { blog_3_1, blog_3_2, blog_3_3, blog_3_4, blog_3_5, blog_3_6_1, blog_3_6_2, blog_3_7 } from '../blogCard/blog-images'
import ShareModal from '../share-modal/share-modal'
import { headers } from 'next/headers'

export default async function Blog_3(blog : blog_data_type) {
  const {date} = blog

   const headerList = await headers()
   const host = await headerList.get("host")!

  return (
    <section>
       <Blob_Details_Banner className='h-[400px]' {...blog}/>

        <div className='p-4 lg:p-12'>
        <p className='opacity-50 text-sm mb-4 italic flex gap-1 items-center'>
        <Calendar className='size-4 '/>
          <span>{format(date, "do MMM yyyy")}</span>
        </p>

        <div className='details'>
        <p className='opacity-75 mb-4' >
        Now that you have clicked the ‘universe in your eyes’ with the specialists at Kalaa Iris, it’s time for you to select the right frame for your artwork. 
        </p>

        <p className='opacity-75 mb-4'>When choosing a frame for your iris print, focus on one that complements the colors and details of the iris. Opt for simple, sleek designs with neutral tones like black, white, or soft wood finishes that allow the intricate patterns of the iris to stand out. Additionally, take into account the overall vibe of your space and pick a frame that suits the atmosphere you want to create—be it modern, minimalist, or traditional.</p>

        <b className='mb-4 block text-primaryColor text-xl'>Key considerations:</b>

        {/*---- Color palette ----*/}
        <ul className='list-disc ml-4'>
          <li className='font-bold text-lg ml-4'>Color palette:</li>
          <ul className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 py-4'>
            <li className='rounded-lg flex flex-col gap-4 relative overflow-hidden bg-white text-black'>
              <Image src={blog_3_1} width={400} height={300} alt="A slim black frame creates a striking contrast" className='rounded-lg w-full h-[400px] object-contain'/>
              <div className='p-4 pt-0'><b>For vibrant irises:</b> A slim black frame creates a striking contrast, highlighting the vivid details.</div>
            </li>

            <li className='rounded-lg flex flex-col gap-4 relative overflow-hidden bg-white text-black'>
              <Image src={blog_3_2} width={400} height={300} alt="A slim black frame creates a striking contrast" className='rounded-lg w-full h-[400px] object-contain'/>
              <div className='p-4 pt-0'><b>For subtle irises:</b> A light wood frame with a gentle grain adds warmth and texture.</div>
            </li>

            <li className='rounded-lg flex flex-col gap-4 relative overflow-hidden bg-white text-black'>
              <Image src={blog_3_3} width={400} height={300} alt="A slim black frame creates a striking contrast" className='rounded-lg w-full h-[400px] object-contain'/>
              <div className='p-4 pt-0'><b>For multicolored irises:</b> A clean white frame provides a fresh, contemporary feel.</div>
            </li>
          </ul>

          
        </ul>


        {/*---- Frame style ----*/}
        <ul className='list-disc my-10  ml-4'>
          <li className='font-bold text-lg ml-4'>Frame style:</li>
          <ul className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 py-4'>
            <li className='rounded-lg flex flex-col gap-4 relative overflow-hidden bg-white text-black'>
              <Image src={blog_3_4} width={400} height={300} alt="A slim black frame creates a striking contrast" className='rounded-lg w-full h-[400px] object-contain'/>
              <div className='p-4 pt-0'><b>Minimalist:</b> Opt for narrow, simple frames in black or white to emphasize the iris&apos;s intricate details.</div>
            </li>

            <li className='rounded-lg flex flex-col gap-4 relative overflow-hidden bg-white text-black'>
              <Image src={blog_3_5} width={400} height={300} alt="A slim black frame creates a striking contrast" className='rounded-lg w-full h-[400px] object-contain'/>
              <div className='p-4 pt-0'><b>Classic:</b> A slightly wider, decorative wood frame brings in a touch of elegance.</div>
            </li>

            <li className='rounded-lg flex flex-col gap-4 relative overflow-hidden bg-white text-black'>
              <div className='grid grid-cols-2'>
                <Image src={blog_3_6_1} width={400} height={300} alt="A slim black frame creates a striking contrast" className='rounded-lg w-full h-[400px] object-contain'/>
                <Image src={blog_3_6_2} width={400} height={300} alt="A slim black frame creates a striking contrast" className='rounded-lg w-full h-[400px] object-contain'/>
              </div>
              <div className='p-4 pt-0'><b>Modern:</b> Try frames with metallic finishes or geometric designs for a bold statement.</div>
            </li>
          </ul>

          
        </ul>



        {/*---- Matting ----*/}
        <ul className='list-disc my-10  ml-4'>
          <li className='font-bold text-lg ml-4'>Matting:</li>
          <ul className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 py-4'>
            <li className='rounded-lg flex flex-col gap-4 relative overflow-hidden bg-white text-black'>
              <Image src={blog_3_7} width={400} height={300} alt="A slim black frame creates a striking contrast" className='rounded-lg w-full h-[400px] object-contain'/>
              <div className='p-4 pt-0 flex flex-col gap-2'>
                <p><b>Use a mat:</b> A white or off-white mat can help highlight the iris and provide visual balance, especially with smaller prints.</p>
                <p><b>Mat size:</b> Ensure the mat creates a balanced border around the print, giving it enough breathing room.</p>
                </div>
            </li>

            

            
          </ul>

          
        </ul>


        <b className='mb-4 block text-primaryColor text-xl'>Additional factors to consider:</b>

        <ul className='list-disc ml-4 mb-10 flex flex-col gap-4'>
        <li><b>Room decor:</b> Make sure the frame’s style and color align with the overall aesthetic of the room where it will be displayed.</li>
        <li><b>Lighting:</b> Think about how the lighting in the room will interact with the iris colors once framed, as it can affect how they appear.</li>
        <li><b>Print size:</b> hoose a frame size, ensuring aesthetically appealing ratio in comparison to the other elements in the room. This artwork is all about revealing the intricate details which are never seen before. The size should complement the artwork to maximize the impact of it.</li>
        </ul>

        <p>At Kalaa Iris, experienced professionals, who after site visit guide you to create an exquisite artwork customized for your space.</p>

        </div>
        <div className='mt-8'>

        <ShareModal host={host}/>
        </div>
        </div>

    </section>
  )
}
