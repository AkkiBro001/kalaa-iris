import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type TitleProps = {
    title: string,
    children?: ReactNode,
    className?: string,
}

export default function Title({title, children, className}: TitleProps) {
  return (
    <div className={cn("flex my-8 p-4 border border-primaryColor rounded-lg border-l-[5px]", className)}>
      <h2 className="text-primaryColor capitalize lg:text-xl text-lg">{title}</h2>
      {children}
    </div>
  )
}
