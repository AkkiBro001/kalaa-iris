import Image from "next/image"

type HeaderType = {
  title: string,
  img?: string
}

export default function GalleryHeader({title, img} : HeaderType) {
  return (
    <header className='mt-8 mb-12 text-xl text-primaryColor border px-5 py-3 rounded border-l-[5px] border-b-[5px] border-primaryColor uppercase flex gap-4 items-center'>
      {img && <Image width={75} height={75} src={img} alt="header-img" className="size-9"/>}
      <span>{title}</span>
    </header>
  )
}
