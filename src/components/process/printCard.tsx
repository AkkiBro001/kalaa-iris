"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { IoPrint } from "react-icons/io5";
import { PrintDataType, PrintSizeDataType } from "./processData";

import { GiResize } from "react-icons/gi";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function PrintCard({ material_details, size_details, selected_default }: PrintDataType) {
  const [selected_size, set_selected_size] = useState<PrintSizeDataType>(
    size_details.find(size => size.type === selected_default) as PrintSizeDataType
  );

  return (
    <Card className="overflow-hidden relative rounded-none w-full xs:w-[400px] border-0">
      <CardContent className="p-0">
        <Image
          width={400}
          height={400}
          alt="pic"
          src={selected_size.images}
          className="w-full aspect-square object-cover"
        />
      </CardContent>
      <CardFooter className="flex justify-between px-4 py-6">
        <section className="flex justify-between gap-2 text-sm relative w-full">
          <div className="flex flex-col gap-2 ">
            
              <div className="flex gap-1" key={material_details.label}>
                <span className="flex gap-2 tracking-wider">
                  <IoPrint className="text-lg" />
                  <span>{material_details.label}</span>
                </span>
                <span className="text-gray-300">{material_details.value}</span>
              </div>
            

            <div className="flex gap-1">
              <span className="flex gap-2 tracking-wider">
                <GiResize className="text-lg" />
                <span>Size:</span>
              </span>
              <span className="text-gray-300">
                {selected_size.size[0]} / {selected_size.size[1]}
              </span>
            </div>

            <Select defaultValue={selected_size.id} onValueChange={value => {set_selected_size(size_details.find(size => size.id === value)!)}}>
              <SelectTrigger className="w-[180px] bg-secondaryColor">
                <SelectValue placeholder="Select Size" />
              </SelectTrigger>
              <SelectContent className="bg-secondaryColor text-white">
                {
                  size_details.map(size => <SelectItem value={size.id} key={size.id}>{size.type}</SelectItem>)
                }
                
                
              </SelectContent>
            </Select>
          </div>
        </section>
      </CardFooter>
    </Card>
  );
}
