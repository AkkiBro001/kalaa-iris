
import {
 
  DialogContent,
  DialogDescription,
 
  DialogHeader,
  DialogTitle,
  
} from "@/components/ui/dialog"
import { GalleryCardProps } from "./galleryCard"
import Image from "next/image"



export function GalleryImageModal({ name, short_code, img }: GalleryCardProps) {
  return (
    
      <DialogContent className="sm:max-w-[1000px] w-[95%]">
        <DialogHeader>
          <DialogTitle className="md:text-2xl text-primaryColor">{name}</DialogTitle>
          <DialogDescription className="md:text-lg text-sm text-white">
            Code: {short_code}
          </DialogDescription>
        </DialogHeader>
          <div>
            <Image width={1440} height={810} src={img} alt={name} className="rounded-md"/>
          </div>
      </DialogContent>
    
  )
}
