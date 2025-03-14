"use client";



import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function ShareModal() {
   
  return (
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
                <a href="/" target="_blank">
                    <Button variant="ghost" size="icon" className="hover:bg-primaryColor hover:text-black">
                       <FaWhatsapp className="text-3xl scale-150"/>
                
                    </Button>
                </a>
                <a href="/" target="_blank">
                    <Button variant="ghost" size="icon" className="hover:bg-primaryColor hover:text-black">
                       <FaInstagram className="text-3xl scale-150"/>
                    </Button>
                </a>
            </div>

            <div className="w-full relative">
                <Input className="text-white pr-[60px]" disabled/>
                <Button size="sm" className="absolute right-1 top-0 py-1 translate-y-[4px]">Copy</Button>
            </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
