"use client";
import { navigation_links } from '@/lib/links'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

function MobileNav() {

  const pathname = usePathname()
  const is_welcome_screen = pathname === "/welcome"
  if(is_welcome_screen) return null
  return (
    <ul className='gap-4 flex justify-around md:hidden sticky bottom-0 p-3 backdrop-blur-md mt-auto shadow-md border-t border-hairlineColor z-50'>
        {
            navigation_links.map(link => {
                 const activeLink = (pathname.includes(link.link) && link.link.length > 1) || (pathname === link.link && link.link.length === 1)
                return <li key={link.id} className={cn(`flex flex-col items-center gap-2 text-xs ${activeLink && "text-primaryColor"}`)}>
                    <link.icon/>
                    <Link href={link.link}>{link.name}</Link>
                </li>
            }
            )
        }
    </ul>
  )
}

export default MobileNav
