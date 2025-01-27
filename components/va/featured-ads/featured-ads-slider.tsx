"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Link from "next/link";
import Image from "next/image";
import { PrevButton, NextButton, usePrevNextButtons } from "./embla-buttons";
import { Ad } from "@/types/va-types";
import FallbackImage from "../common/fallback-image/fallback-image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { badgeVariants } from "@/components/ui/badge";

interface FeaturedAdsSliderProps {
  ads: Ad[];
  vertical?: boolean;
}

export function FeaturedAdsSlider({
  ads = [],
  vertical = true,
}: FeaturedAdsSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    axis: vertical ? "y" : "x",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi as EmblaCarouselType | undefined);

  if (!ads || ads.length === 0) {
    return null;
  }
  return (
    <>
      <div className="embla__controls flex justify-end gap-2 mb-4 mr-6">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="rounded-full disabled:opacity-25"
        />
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="rounded-full disabled:opacity-25"
        />
      </div>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div
          className={`embla__container flex mx-2 py-4  ${vertical ? "flex-col h-[500px]" : ""}`}
        >
          {ads.map((ad) => {
            const { ad_images, title, description } = ad;
            return (
              <div
                key={ad.uuid}
                className={`embla__slide  grow-0 shrink-0 px-3  ${vertical ? "pb-2  basis-1/4" : "basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"}`}
              >
                <Card className="overflow-hidden flex flex-col h-full">
                  <AspectRatio ratio={3 / 2} className="relative">
                    {ad_images ? (
                      <Image
                        src={ad_images[0]?.image_url}
                        width={475}
                        height={315}
                        className="w-full  h-full  object-cover"
                        alt={title}
                      />
                    ) : (
                      <FallbackImage
                        className="w-full  h-full  object-cover"
                        iconSize="size-12"
                      />
                    )}
                    <div className="mt-10 flex gap-2 absolute bottom-4 left-4">
                      <Link
                        href={`/category/${ad.region.slug}`}
                        className={badgeVariants({ variant: "default" })}
                      >
                        {ad.region.region_name}
                      </Link>
                      <Link
                        href={`/category/${ad.ad_categories.slug}`}
                        className={badgeVariants({ variant: "default" })}
                      >
                        {ad.ad_categories.category_name}
                      </Link>
                    </div>
                  </AspectRatio>
                  <CardHeader>
                    <CardTitle>
                      <h3 className="leading-normal">{`${title.slice(0, 40)}...`}</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{`${description.slice(0, 100)}...`}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="secondary">
                      <Link href={`/annoncer/${ad.slug}`}>Læs mere</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
