import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    className?: string
}


export default function Container({children, className}:Props) {
  return (
    <div className={cn("w-full max-w-[1440px] mx-auto" ,className)}>
        {children}
    </div>
  )
}
