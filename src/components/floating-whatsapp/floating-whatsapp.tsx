import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a href={`https://api.whatsapp.com/send?phone=919021028599&text=`} target="_blank" className="fixed top-[85vh] -right-[90px] bg-black z-50 flex items-center gap-2 p-2 text-lg rounded-tl-lg rounded-bl-lg transition-all hover:right-0">
      <FaWhatsapp className="text-3xl"/>
      <span>Whatsapp</span>
    </a>
  )
}