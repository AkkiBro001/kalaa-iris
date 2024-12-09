import Image from 'next/image'
import React from 'react'

export default function FranchiseHeader() {
  return (
    <header className='px-6 py-8 flex flex-col gap-6 md:flex-row items-center justify-center'>
      <div className='flex flex-col gap-4 max-w-[600px]'>
        <h2 className='text-3xl text-primaryColor font-bold'>A Picture-Perfect<br/>Franchise Opportunity</h2>
        <p className='text-xl text-balance'>Unlock the Potential of Art and Entrepreneurship with us and be the first in your town to celebrate
        this unique art</p>
      </div>

      <div>
        <Image src="/iris/04.png" width={500} height={500} alt="04"/>
      </div>
    </header>
  )
}
