import Image from "next/image";
import MenuLinks from "./menu";

function Navigation() {
  return (
    <nav className="flex gap-10 h-[120px] items-center justify-center sticky top-0 border-b border-secondaryColor z-50 backdrop-blur-sm p-4">
      <Image src="/Kalaa-Iris-white-01.png" alt="logo" width={197} height={80} className="h-[70px] w-auto"/>
      <MenuLinks/>
    </nav>
  )
}

export default Navigation
