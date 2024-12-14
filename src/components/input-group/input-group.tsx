"use client";
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import {useFormContext } from "react-hook-form"

type Prorps = {
    children: ReactNode,
    short_code: string,
    className?: string,
}

export default function InputGroup({children, className, short_code}:Prorps) {
  const { formState: { errors } } = useFormContext() // retrieve all hook methods
  return (
    <div className={cn("flex flex-col gap-2 flex-1", className)}>
      {children}
      {errors[short_code]?.message && <p className="text-red-500 text-xs">{errors[short_code]?.message as string}</p>}
    </div>
  )
}
