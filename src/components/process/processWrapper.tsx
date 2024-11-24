import { cn } from "@/lib/utils";
import { ReactNode } from "react";


export default function ProcessWrapper({children, className}: {children: ReactNode, className?: string}) {
  return (
    <div className={cn("py-6 flex flex-col items-center gap-8", className)}>
      {children}
    </div>
  )
}
