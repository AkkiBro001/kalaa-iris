"use client";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <section className='bg-[#49494b] h-screen relative flex items-center z-[1]'
    style={{backgroundImage: `url(/Kalaa-Iris-white-01.png)`}}
    >
      <motion.div className='p-6 flex flex-col items-center gap-10'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      >
        <Image src="/Kalaa-Iris-white-01.png" width={275} height={80} alt='logo'/>
        <h2 className='text-6xl text-center uppercase font-bold tracking-wide leading-snug'>Welcome to <span className='text-primaryColor inline-block underline underline-offset-8'>India&apos;s first</span> <br/>dedicated iris studio</h2>
        <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            >
          <Link href="/"><Button className='uppercase tracking-wider min-w-[250px] hover:bg-primaryColor text-lg font-bold shadow-xl' size="lg">Explore More</Button></Link>
        </motion.div>
      </motion.div>
      <video src='./welcome_screen.mp4' autoPlay muted loop className='h-full w-full absolute object-cover object-right top-0 -z-10'/>
    </section>
  )
}
