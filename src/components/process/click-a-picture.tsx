import Image from "next/image";
import SubTitle from "../subTitle/subTitle";
import ProcessWrapper from "./processWrapper";

export default function ClickAPicture() {
    
  return (
    <ProcessWrapper className="w-full">
      <SubTitle text="01. Click a picture"/>

      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1440px] mx-auto mt-12">
        <Image width={1472} height={832} src="/print/click-picture-2.jpg" alt="02. click a picture" className="rounded-md"/>
        <Image width={1472} height={832} src="/print/click-picture-1.jpg" alt="01. click a picture" className="rounded-md"/>
      </section>
    </ProcessWrapper>
  )
}
