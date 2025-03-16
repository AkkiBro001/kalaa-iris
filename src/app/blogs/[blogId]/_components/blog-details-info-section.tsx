import { Calendar} from 'lucide-react'
import { blog_data_type } from '@/components/blogCard/blog-data'

import ShareModal from '@/components/share-modal/share-modal'
import { headers } from 'next/headers'
import { format } from 'date-fns'


export default async function Blog_Details_Info_Section({title, date, body, blog_banner_image}: blog_data_type) {
  const headerList = await headers()
      const host = await headerList.get("host")!
  return (
    <div className='blog-details-section flex flex-col gap-4'>
      <section className='details'>
        {!blog_banner_image && <h2 className='text-primaryColor text-2xl mb-1'>{title}</h2>}
        <p className='opacity-50 text-sm mb-4 italic flex gap-1 items-center'>
        <Calendar className='size-4 '/>
          <span>{format(date, "do MMM yyyy")}</span>
        </p>

        {
           body.map((data, index) => <p className='opacity-75 mb-4' key={`blog-details-${index}`}>
            {
              typeof data === "object" ? (
                <span>
                  <span className='text-primaryColor'>{data.title}</span>{" "}
                  <span>{data.body}</span>
                </span>
              ) : data
            }
            
          </p>)
        }
        
      </section>

      <ShareModal host={host}/>
      
    </div>
  )
}
