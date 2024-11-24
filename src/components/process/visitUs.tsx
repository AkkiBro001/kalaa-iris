import Image from "next/image";
import SubTitle from "../subTitle/subTitle";
import ProcessWrapper from "./processWrapper";
import { FaLocationDot } from "react-icons/fa6";
//255 170 0
export default function VisitUs() {
  return (
    <ProcessWrapper>
      <SubTitle text="01. Visit Us"/>

      <section className="flex flex-wrap gap-6 justify-center">
        <Image width={400} height={400} alt="pic" src="/visit-us/visit-us-1.webp" className="image-rb-border-frame basis-1/4"/>
        <Image width={400} height={400} alt="pic" src="/visit-us/visit-us-2.webp" className="image-rb-border-frame basis-1/4"/>
        <Image width={400} height={400} alt="pic" src="/visit-us/visit-us-3.webp" className="image-rb-border-frame basis-1/4"/>
      </section>

      <div className="flex flex-col">
        <h3 className="text-xl xs:text-2xl text-center my-4">Come by our location!</h3>
        <div className="flex flex-col xs:flex-row items-center text-sm xs:text-base gap-3">
            <span className="flex gap-2 items-center text-primaryColor">
                <FaLocationDot />
                <span>Address:</span>
            </span>
            <p>Memorial City Mall, Houston, TX 77024</p>
        </div>
      </div>

    </ProcessWrapper>
  )
}
