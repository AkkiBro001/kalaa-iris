"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { heroBanner } from "./heroBannerData";
import Image from "next/image";



export function HeroBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <section>

    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[1980px] overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {heroBanner.map((banner, index) => (
          <CarouselItem key={index}>
            <div>
                <Image src={banner.bgImg} alt={banner.id} width={1440} height={810} className="w-full h-auto max-h-[90dvh] object-cover"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}
