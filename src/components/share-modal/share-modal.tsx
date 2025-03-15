"use client";



import { Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";



export default function ShareModal({host} : {host: string}) {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, copyToClipboard] = useCopyToClipboard()
  const pathname = usePathname()
  const { toast } = useToast()
  
  const handle_copyTOclipBoard = async () => {
    await copyToClipboard(`${host}${pathname}`)
    toast({title: "✅ Url Copied Successfully",
      // description: "We will get in touch with you soon.",
      
   })
  }
  
 
  return (
    <>
     
    <Dialog>
      <DialogTrigger className="text-white self-start flex gap-2 border border-white p-3 rounded-lg hover:bg-white hover:text-black">
      
      <Share2 />
        <span>Share</span>
      
      </DialogTrigger>
      <DialogContent className="max-w-[500px] w-[90%]">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
          <DialogDescription>
            Share on social media
          </DialogDescription>
        </DialogHeader>
       
        <section className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-4">
                <a href={`https://api.whatsapp.com/send?text=${host}${pathname}`} target="_blank">
                    <Button variant="ghost" size="icon" className="hover:bg-primaryColor hover:text-black">
                       <FaWhatsapp className="text-3xl scale-150"/>
                
                    </Button>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${host}${pathname}`}target="_blank">
                    <Button variant="ghost" size="icon" className="hover:bg-primaryColor hover:text-black">
                       <FaSquareFacebook className="text-3xl scale-150"/>
                    </Button>
                </a>

                <a href={`https://twitter.com/intent/tweet?text=Check%20this%20out!&url=${encodeURIComponent(host+pathname)}&hashtags=kalaa-iris,iris-photography`}target="_blank">
                    <Button variant="ghost" size="icon" className="hover:bg-primaryColor hover:text-black">
                       <FaSquareXTwitter className="text-3xl scale-150"/>
                    </Button>
                </a>
            </div>

            <div className="w-full relative">
                <Input className="text-white pr-[82px]" disabled defaultValue={`${host}${pathname}`}/>
                <Button size="sm" className="absolute right-1 top-0 py-1 translate-y-[4px]" onClick={handle_copyTOclipBoard}>
                <Copy />
                  <span>Copy</span>
                  </Button>
            </div>
        </section>
      </DialogContent>
    </Dialog>
    </>
  );
}
