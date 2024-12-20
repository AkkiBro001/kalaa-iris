"use client";
import Link from 'next/link'
import React from 'react'
import {navigation_links} from "../../lib/links" 
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';


function MenuLinks() {

  const pathname = usePathname()
  
  console.log(pathname)
  
  return (
    <ul className='gap-8 hidden md:flex'>
        {
            navigation_links.map(link => {

              const activeLink = (pathname.includes(link.link) && link.link.length > 1) || (pathname === link.link && link.link.length === 1)
              
              return  <li key={link.id}>
                  <Link href={link.link} className={cn(`flex gap-2 hover:text-primaryColor ${activeLink && "text-primaryColor"}`)}>
                    <link.icon/>
                    {link.name}
                  </Link>
                </li>
           } )
        }
    </ul>
  )
}

export default MenuLinks
