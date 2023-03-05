"use client";

import { PropsCard } from "@/@Types/card";
import { ReactElement, ReactNode, useEffect } from "react";

import cx from "clsx";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';

import Image, { StaticImageData } from "next/image";

interface CarouselOfCardsProps {
  slides: string[], // slides: Array<ReactElement<PropsCard>>
  options?: EmblaOptionsType,
  className?: string,
}

function CarouselOfCards({slides, options, className = ""}: CarouselOfCardsProps) {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes());
  //   }
  // }, [emblaApi])

  return(
    <div className={cx("overflow-hidden", className)}>
      <div
        ref={emblaRef}
        className={"p-[1.6rem]"}
      >
        <div className={"flex flex-row h-auto ml-[calc(var(--slide-spacing) * -1)]"}>
            {slides.map((img, index) => (
              <div
                key={index}
                className={"flex-0 flex-shrink-0 flex-[var(--slide-size)] h-80 w-[var(--slide-size)] pl-[var(--slide-spacing)] relative"}
              >
                <Image
                  className={"w-full h-full object-cover"}
                  src={img}
                  fill
                  alt={"alt text"}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};

export { CarouselOfCards }