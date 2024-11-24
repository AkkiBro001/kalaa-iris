"use client";
import Link from 'next/link'
import React from 'react'
import {navigation_links} from "../../lib/links" 
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';


function MenuLinks() {

  const pathname = usePathname()
  
  
  return (
    <ul className='gap-8 hidden md:flex'>
        {
            navigation_links.map(link => (
                <li key={link.id} className={cn(`flex gap-2 hover:text-primaryColor ${pathname === link.link && "text-primaryColor"}`)}>
                    <link.icon/>
                    <Link href={link.link}>{link.name}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default MenuLinks
