import Image from "next/image";
import SubTitle from "../subTitle/subTitle";
import ProcessWrapper from "./processWrapper";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "../ui/button";
import { BiSolidNavigation } from "react-icons/bi";
// import Flashcard from "../flashcard/flashcard";
//255 170 0
export default function VisitUs() {
  return (
    <ProcessWrapper>
      <SubTitle text="01. Visit Us"/>
      <section className="flex flex-wrap gap-6 justify-center relative">
      {/* <Flashcard className="left-[10px] -top-[212px] -rotate-[15deg] hidden md:flex bg-green-900 border-green-950"/> */}
      
        <Image width={400} height={400} alt="pic" src="/visit-us/visit-us-1.webp" className="image-rb-border-frame basis-1/4 w-auto h-auto"/>
        <Image width={400} height={400} alt="pic" src="/visit-us/visit-us-2.webp" className="image-rb-border-frame basis-1/4 w-auto h-auto"/>
        <Image width={400} height={400} alt="pic" src="/visit-us/visit-us-3.webp" className="image-rb-border-frame basis-1/4 w-auto h-auto"/>
      </section>

      <div className="flex flex-col text-center relative mt-8 ">
      {/* <Flashcard className="hidden md:flex bg-blue-900 border-blue-950 rotate-[15deg]"/> */}
        <h3 className="text-xl xs:text-2xl my-4">Come by our location!</h3>
        <div className="flex flex-col items-center gap-5 text-base text-primaryColor">
            <div className="flex flex-col xs:flex-row items-center gap-3">
              <span className="flex gap-2 items-center">
                  <FaLocationDot />
                  <span>Address:</span>
              </span>
              <p>Memorial City Mall, Houston, TX 77024</p>
            </div>
            <Button className="text-black bg-primaryColor">
              <BiSolidNavigation />
              <span>Get Direction</span>
            </Button>
        </div>
      </div>

    </ProcessWrapper>
  )
}
