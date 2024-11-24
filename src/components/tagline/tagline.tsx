import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Tagline() {
  return (
    <div className="h-[500px] relative p-4 flex flex-col gap-12 justify-center items-center">
      <Image
        src="/tagline-bg.jpg"
        width={1440}
        height={810}
        className="w-full h-full object-cover absolute -z-10 left-0 top-0 md:opacity-20 opacity-15"
        alt="tagline-bg"
      />
        <span className="hidden xs:block w-full h-full top-0 left-0 absolute -z-10 " style={{background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"}}></span>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-balance text-center tracking-wide font-bold leading-snug md:leading-snug lg:leading-snug">
        WE CREATE <span className="text-primaryColor">‘EYE’ CONIC ART</span>
      </h1>
      <div className="flex gap-4 flex-col w-full max-w-[500px] xs:flex-row">
        <Input placeholder="Enter Your Email ID" />
        <Button className="uppercase font-bold hover:bg-primaryColor">Get On Board</Button>
      </div>
    </div>
  );
}

export default Tagline;
