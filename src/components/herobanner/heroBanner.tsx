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
import { heroBanner } from "./heroBannerData";
import { Button } from "../ui/button";
import Link from "next/link";
// import Image from "next/image";

export function HeroBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[3000px] overflow-hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {heroBanner.map((banner, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col relative">
                <picture className="w-full">
                  <source
                    media="(min-width: 576px)"
                    srcSet={banner.desktopBG}
                  />
                  <img
                    src={banner.mobileBG}
                    alt="Multiple images for different conditions"
                    style={{
                      height: "calc(100vh - 120px)",
                      width: "100%",
                    }}
                    className=" object-cover"
                  />
                </picture>

                <div className="w-100% top-0 lg:w-[45%] xs:w-[50%] h-full absolute flex flex-col justify-end pb-[130px] xs:justify-center right-0 p-4 bg-black-100 text-center">
                  <h1 className="lg:text-5xl md:text-4xl text-3xl my-4 font-bold text-primaryColor pl-4 tracking-wider">
                    {banner.title}
                  </h1>
                  <p className="text-slate-200  text-base md:text-lg leading-relaxed">
                    {banner.desc}
                  </p>
                  <Link href={banner.link}>
                  <Button
                    size="sm"
                    className="mt-5 xs:mt-10 self-center max-w-[250px] w-full uppercase font-bold  tracking-wider"
                  >
                    Explore More
                  </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
