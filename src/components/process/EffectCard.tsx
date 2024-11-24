
import { ChooseEffectDataType } from "./processData";
import { Button } from "../ui/button";
import Link from "next/link";


export default function EffectCard({ img, title, link}: ChooseEffectDataType) {
  return (
    <div style={{backgroundImage: `url(${img})`}} className="w-full aspect-[10/3] bg-cover p-6 rounded-md overflow-hidden flex items-center border border-l-4 border-hairlineColor">
      
      <div className="flex flex-col xs:gap-5 gap-3 items-start">
      <h2 className="text-base md:text-2xl lg:text-xl">{title}</h2>
      <Button size="sm" variant="outline" className="md:bg-transparent text-black md:text-white"><Link href={link}>Choose</Link></Button>

      </div>
    </div>
  )
}
