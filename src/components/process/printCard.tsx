import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { PrintDataType } from "./processData";


export function PrintCard({ img, details }: PrintDataType) {
  return (
    <Card className="overflow-hidden relative rounded-none w-full xs:w-[400px] border-0">
        
      <CardContent className="p-0">
        <Image
          width={400}
          height={400}
          alt="pic"
          src={img}
          className="w-full aspect-square object-cover"
        />
      </CardContent>
      <CardFooter className="flex justify-between px-4 py-6">
        <section className="flex flex-wrap justify-between gap-2 text-sm relative w-full">
          {details.map((detail) => (
              <div className="flex items-center gap-2" key={detail.label}>
                
              <span className="flex items-center gap-2 tracking-wider">
                <detail.icon className="text-lg"/>
                <span>{detail.label}</span>
              </span>

              <span className="text-gray-300">{detail.value}</span>
            </div>
          ))}
        </section>
      </CardFooter>
    </Card>
  );
}
