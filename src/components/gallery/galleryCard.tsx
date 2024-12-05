import Image from "next/image"
import { LiaBarcodeSolid } from "react-icons/lia";

type Props = {
    name: string,
    short_code: string,
    img: string
}

export default function GalleryCard({name, short_code, img}:Props) {
  return (
    <div className="flex flex-col w-full bg-secondaryColor overflow-auto rounded-md border border-b-[6px] border-primaryColor hover:scale-105 transition-all cursor-pointer">
      <div>
          <Image width={1170} height={658} src={img} alt={name}/>
      </div>

      <div className="p-3 flex flex-col gap-2 items-center">
        <span className="text-lg text-primaryColor">{name}</span>
        <span className="flex gap-2 text-sm opacity-75">
            <span className="flex gap-2 items-center"><LiaBarcodeSolid className="text-lg"/> <span>Code: </span></span>
            <span>{" "}{short_code}</span>
        </span>
      </div>
    </div>
  )
}
