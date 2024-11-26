/* eslint-disable @next/next/no-img-element */
import { ProcessDataType } from "./processData";
export default function ProcessCard({icon: Icon, title, desc, step}:ProcessDataType) {
  return (
    <div
      className="bg-secondaryColor p-5 rounded-xl flex lg:flex-col gap-6 justify-end items-center relative overflow-hidden border border-hairlineColor"
     
    >
      
      <div>
        <Icon className="lg:text-[7rem] text-8xl text-primaryColor opacity-60"/>
      </div>
      <div className="text-left lg:text-center relative">
          <span className="absolute text-8xl font-bold right-0 -bottom-4 opacity-5 scale-150">{step}</span>
          <h3 className="text-lg md:text-xl font-bold mb-4 text-primaryColor">
            {title}
          </h3>
          <p className="text-sm md:text-base text-balance">
           {desc}
          </p>
      </div>
    </div>
  );
}
