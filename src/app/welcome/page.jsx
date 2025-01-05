"use client";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <section className='bg-[#49494b] h-screen relative flex items-center z-[1]'
   
    >
      <motion.div className='p-6 flex flex-col mx-auto xl:mx-0 items-center gap-10'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      >
        <Image src="/Kalaa-Iris-white-01.png" width={275} height={80} alt='logo' className='xl:w-[275px] w-[250px]'/>
        <h2 className='xl:text-6xl md:text-5xl xs:text-4xl  text-3xl text-center uppercase font-bold tracking-wide leading-relaxed sm:leading-relaxed md:leading-snug xl:leading-snug xs:leading-snug'>Welcome to <span className='text-primaryColor inline-block underline underline-offset-8'>India&apos;s first</span> <br/>dedicated iris studio</h2>
        <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            >
          <a href="/home"><Button className='uppercase tracking-wider min-w-[250px] hover:bg-primaryColor text-lg  font-bold shadow-xl' size="lg">Explore More</Button></a>
        </motion.div>
      </motion.div>
      <div className='bg-black/80 w-full h-full absolute top-0 left-0 -z-10 block xl:hidden'></div>
      <video src='./welcome_screen.mp4' autoPlay muted loop className='h-full w-full absolute object-cover object-right top-0 -z-20'/>
    </section>
  )
}
