"use client";
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Prorps = {
    children: ReactNode,
    className?: string
}

export default function InputGroup({children, className}:Prorps) {
  return (
    <div className={cn("flex flex-col gap-2 flex-1", className)}>
      {children}
      {/* <p className="text-red-700 text-sm">This field is required</p> */}
    </div>
  )
}
