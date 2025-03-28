import React from "react";
import Image from "next/image";
import { blog_data_type } from "../blog-data";
import { cn } from "@/lib/utils";

export default function Blog_Image_Section({
  images,
  id,
  image_grid_area_name,
  grid_template_column,
  grid_template_areas,
  image_classes
}: blog_data_type) {
  return (
    <div
      className="blog-image-section grid min-w-[300px] gap-2"
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
          className={cn("w-full h-full object-cover rounded-xl", image_classes && image_classes)}
        />
      ))}
    </div>
  );
}
