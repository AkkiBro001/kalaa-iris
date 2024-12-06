
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
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            {short_code}
          </DialogDescription>
        </DialogHeader>
          <div>
            <Image width={1440} height={810} src={img} alt={name} />
          </div>
      </DialogContent>
    
  )
}
