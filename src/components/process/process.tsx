import Image from "next/image";
import Title from "../title/title"

import ProcessCard from "./processCard"
import { processData } from "./processData"


import { TbPhotoCog } from "react-icons/tb";

function Process() {
  return (
    <div className="px-4 py-8 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <Image src="/tagline-bg.jpg" width={500} height={500} alt="tagline-bg" className="absolute w-full h-full object-cover -z-10 opacity-10 left-0 top-0"/>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-balance text-center tracking-wide font-bold leading-snug md:leading-snug lg:leading-snug">
         WE CREATE <span className="text-primaryColor">‘EYE’ CONIC ART</span>
      </h1>
      <Title title="The Process of our Unique Artwork in 3 ‘C’s" icon={TbPhotoCog}/>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[1300px] w-full">
        {
          processData.map(process => <ProcessCard key={process.id} {...process}/>)
        }
        
      </section>
      
    </div>
  )
}

export default Process
