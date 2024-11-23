import { navigation_links } from '@/lib/links'
import Link from 'next/link'

import React from 'react'

function MobileNav() {
  return (
    <ul className='gap-4 flex justify-around md:hidden sticky bottom-4 p-3 backdrop-blur-md border rounded-xl w-[95%] mx-auto border-secondaryColor mt-auto'>
        {
            navigation_links.map(link => (
                <li key={link.id} className='flex flex-col items-center gap-2 text-xs'>
                    <link.icon/>
                    <Link href={link.link}>{link.name}</Link>
                </li>
            ))
        }
    </ul>
  )
}

export default MobileNav
