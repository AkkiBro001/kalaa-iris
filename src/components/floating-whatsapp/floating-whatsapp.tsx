"use client";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {

  const pathname = usePathname()
    const is_welcome_screen = pathname === "/welcome"
    if(is_welcome_screen) return null

  return (
    <a href={`https://api.whatsapp.com/send?phone=919021028599&text=`} target="_blank" className="fixed hidden md:flex top-[85vh] -right-[105px] bg-black z-50 items-center gap-2 p-2 text-lg rounded-tl-lg rounded-bl-lg transition-all hover:right-0">
      <FaWhatsapp className="text-3xl"/>
      <span>Whatsapp</span>
    </a>
  )
}
