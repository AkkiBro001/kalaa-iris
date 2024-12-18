/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { gallery_banner_data } from "./galleryData";


// import Image from "next/image";

export function GalleryBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[3000px] overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {gallery_banner_data.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col relative">
                <picture className="w-full">
                  <source
                    media="(min-width: 576px)"
                    srcSet={banner.img.desktop}
                  />
                  <img
                    src={banner.img.mobile}
                    alt="Multiple images for different conditions"
                    
                    className="w-full h-auto"
                  />
                </picture>

                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-primaryColor text-black border-none size-7 md:size-10 hover:bg-primaryColor hover:text-black hidden md:flex"/>
        <CarouselNext className="right-4 bg-primaryColor text-black border-none size-7 md:size-10 hover:bg-primaryColor hover:text-black hidden md:flex"/>
      </Carousel>
    </section>
  );
}
