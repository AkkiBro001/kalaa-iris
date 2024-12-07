import { cn } from "@/lib/utils"
import Image from "next/image"

type HeaderType = {
  title: string,
  img?: string,
  className?: string,
  id?: string
}

export default function CommonHeader({title, img, className, id = ""} : HeaderType) {
  return (
    <header id={id} className={cn('mt-8 mb-12 text-xl text-primaryColor border px-5 py-3 rounded border-l-[5px] border-b-[5px] border-primaryColor uppercase flex gap-4 items-center', className)}>
      {img && <Image width={75} height={75} src={img} alt="header-img" className="size-9"/>}
      <span>{title}</span>
    </header>
  )
}
