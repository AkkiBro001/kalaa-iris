import { cn } from "@/lib/utils";
import Image from "next/image";

type FlashcardProrps = {
  className?: string,

}

export default function Flashcard({className}: FlashcardProrps) {
  return (
    <div className={cn("w-full flex items-center p-4 justify-center max-w-[400px] text-white absolute min-h-[120px] overflow-hidden rounded-md border-l-[5px] -z-10", className)}>
      <p className="text-balance">
        The human eye can distinguish around 10 million diffrent colors.
      </p>
      <Image src="/eye-clipart/eye-clip-1.svg" alt="flash" width={100} height={100} className="w-[60%] opacity-5 absolute -right-10"/>
    </div>
  )
}
