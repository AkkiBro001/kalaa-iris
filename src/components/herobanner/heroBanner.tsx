"use client";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { heroBanner } from "./heroBannerData";



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
                <img src={banner.bgImg} alt={banner.id} />
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
