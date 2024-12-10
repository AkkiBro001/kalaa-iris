"use client";
import Image from "next/image";
import { LiaBarcodeSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { GalleryImageModal } from "./galleryImageModal";

export type GalleryCardProps = {
  name: string;
  short_code: string;
  img: string;
  index?: number;
};

export default function GalleryCard({ name, short_code, img }: GalleryCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          className="flex flex-col w-full bg-secondaryColor overflow-auto rounded-md border border-b-[6px] border-primaryColor cursor-pointer"
          initial={{ opacity: 0, scale: 0.45 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.07, duration: 0.1, ease: "ease" }}
        >
          <div>
            <Image width={1170} height={658} src={img} alt={name}/>
          </div>

          <div className="p-3 flex flex-col gap-2 items-center">
            <span className="text-lg text-primaryColor">{name}</span>
            <span className="flex gap-2 text-sm opacity-75">
              <span className="flex gap-2 items-center">
                <LiaBarcodeSolid className="text-lg" /> <span>Code: </span>
              </span>
              <span> {short_code}</span>
            </span>
          </div>
        </motion.div>
      </DialogTrigger>

      <GalleryImageModal  name={name} short_code={short_code} img={img}/>
    </Dialog>
  );
}
