"use client";
import Image from "next/image";
import MenuLinks from "./menu";
import Link from "next/link";
import { usePathname } from "next/navigation";



function Navigation() {

  const pathname = usePathname()
  const is_welcome_screen = pathname === "/welcome"
  if(is_welcome_screen) return null
  return (
    <nav className="flex gap-10 h-[100px] xs:h-[120px] items-center justify-center sticky top-0 z-50 backdrop-blur-lg p-4 bg-black/35">
      <Link href="/" className="w-auto static lg:absolute left-6">
        <Image src="/Kalaa-Iris-white-01.png" alt="logo" width={197} height={80} className="h-[65px] xs:h-[70px]"/>
      </Link>
      <MenuLinks/>
    </nav>
  )
}

export default Navigation
