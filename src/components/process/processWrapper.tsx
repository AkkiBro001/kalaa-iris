import { cn } from "@/lib/utils";
import { ReactNode } from "react";


export default function ProcessWrapper({children, className}: {children: ReactNode, className?: string}) {
  return (
    <div className={cn("py-6 px-6 flex flex-col justify-center items-center gap-8 relative", className)} style={{minHeight: 'calc(100vh - 120px)'}}>
      {children}
    </div>
  )
}
