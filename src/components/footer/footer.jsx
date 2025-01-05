"use client";

import { usePathname } from "next/navigation";

export default function FooterBar() {

  const pathname = usePathname()
      const is_welcome_screen = pathname === "/welcome"
      if(is_welcome_screen) return null

  return (
    <div className='p-4 border-t border-hairlineColor xs:text-left text-center'>
      <span>&copy; copyright {new Date().getFullYear()} Kalaa Iris, All right reserved.</span>
    </div>
  )
}
