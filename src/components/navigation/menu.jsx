import Link from 'next/link'
import React from 'react'
import {navigation_links} from "../../lib/links" 

function MenuLinks() {
  return (
    <ul className='gap-8 hidden md:flex'>
        {
            navigation_links.map(link => (
                <li key={link.id} className='flex gap-2 hover:text-primaryColor'>
                    <link.icon/>
                    <Link href={link.link}>{link.name}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default MenuLinks
