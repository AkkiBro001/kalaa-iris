import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { IconType } from "react-icons"

type TitleProps = {
    title: string,
    children?: ReactNode,
    className?: string,
    icon: IconType
}

export default function Title({title, children, className, icon: Icon}: TitleProps) {
  return (
    <div className={cn("flex flex-col md:flex-row mt-8 mb-10 py-6 rounded-lg mx-auto text-primaryColor items-center gap-6 w-fit", className)}>
      
      <span className="border-2 border-primaryColor p-2 rounded-lg">
        <Icon className="md:text-4xl text-3xl"/>
      </span>
      <h2 className="capitalize lg:text-3xl md:text-2xl text-2xl text-center">{title}</h2>
      {children}
    </div>
  )
}
