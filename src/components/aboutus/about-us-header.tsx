"use client";
import Image from "next/image";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { motion } from "framer-motion";


export default function AboutUsHeader() {
  return (
    <header className="flex p-6 items-center md:gap-10 gap-8 justify-center min-h-[500px] relative">
      <div className="flex flex-col items-center">
        <p className="flex gap-2 items-center text-3xl justify-center text-primaryColor"><span>Namaste</span>  <LiaPrayingHandsSolid className="text-2xl md:text-4xl"/></p>
        <span className="w-[50px] h-1 bg-primaryColor my-3 rounded-xl"></span>
        <p className="text-lg md:text-2xl text-center">Welcome to Kalaa Iris – Where Art meets vision!</p>
        
      </div>

      <motion.div className="size-[350px] flex-shrink-0 opacity-10 absolute"
       animate={{
        scale: [1, 1.2, 1], // scale up and down
      }}
      transition={{
        duration: 6, // time taken for one animation cycle
        ease: "easeInOut", // smooth transition
        repeat: Infinity, // infinite loop of animation
        repeatType: "loop", // loop the animation
      }}
      >
        <Image src="/kalaa-iris-pupil.png" width={500} height={500} alt="kala iris pupils" className="w-full h-full"/>
      </motion.div>
    </header>
  )
}
