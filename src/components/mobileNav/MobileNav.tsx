"use client";
import { navigation_links } from '@/lib/links'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

function MobileNav() {

  const pathname = usePathname()

  return (
    <ul className='gap-4 flex justify-around md:hidden sticky bottom-0 p-3 backdrop-blur-md mt-auto shadow-md border-t border-hairlineColor'>
        {
            navigation_links.map(link => (
                <li key={link.id} className={cn(`flex flex-col items-center gap-2 text-xs ${pathname === link.link && "text-primaryColor"}`)}>
                    <link.icon/>
                    <Link href={link.link}>{link.name}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default MobileNav
