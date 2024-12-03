import Image from "next/image";
import { CategoryDetailsProps } from "./galleryData";

export default function CategoryCard({img, name}:CategoryDetailsProps) {
  return (
    <div className="bg-secondaryColor p-6 flex flex-col gap-4 text-center rounded-xl border-b-[6px] border-primaryColor cursor-pointer transition-all hover:scale-105 hover:border hover:border-b-[6px]">
      <Image src={img} width={500} height={500} alt="couple" className="w-full aspect-square"/>
      <h3 className="text-primaryColor xs:text-xl text-lg uppercase font-bold tracking-wider flex flex-col items-center gap-3">
      <span>{name}</span>
      <span className="w-[40px] h-1 bg-primaryColor block rounded-[99px]"/>
      </h3>
      
      <p className="tracking-wider">3 Effects</p>
    </div>
  )
}
