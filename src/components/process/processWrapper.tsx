import { ReactNode } from "react";


export default function ProcessWrapper({children}: {children: ReactNode}) {
  return (
    <div className="py-6 flex flex-col items-center gap-8">
      {children}
    </div>
  )
}
