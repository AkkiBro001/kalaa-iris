import { blog_data_type } from '@/components/blogCard/blog-data'
import Image from 'next/image';
import React from 'react'

export default function Blog_Details_Image_Section({
    images,
    id,
    image_grid_area_name,
    grid_template_column,
    grid_template_areas,}: blog_data_type) {
  return (
      <div
        className="blog-image-section grid md:max-w-[500px] max-w-[800px] self-start w-full flex-shrink-0 gap-4 mx-auto"
        style={{
          gridTemplateColumns: grid_template_column,
          gridTemplateAreas: grid_template_areas,
        }}
      >
        {images.map((img, index) => (
          <Image
            src={img}
            alt={`blog-img-${id}-${index}`}
            width={300}
            height={300}
            style={{ gridArea: image_grid_area_name[index] }}
            key={`blog-img-${id}-${index}`}
            className="w-full h-full object-cover rounded-xl"
          />
        ))}
      </div>
    );
}
