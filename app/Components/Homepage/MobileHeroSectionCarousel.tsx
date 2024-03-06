"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroImg3 from "@/public/images/1.png";
import HeroImg2 from "@/public/images/2.jpg";
import HeroImg1 from "@/public/images/3.png";
import Image from "next/image";
import { TouchEvent, useState } from "react";

const MobileHeroSectionCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      autoFocus={false}
      centerMode={true}
      swipeable={false}
      showThumbs={false}
      className="custom-carousel my-10"
    >
      <div className="mx-2">
        <Image
          src={HeroImg1}
          alt="hero image"
          width={370}
          className="bg-cover h-[295px] rounded-xl z-20"
        />
      </div>
      <div className="mx-2">
        <Image
          src={HeroImg2}
          alt="hero image"
          width={370}
          className="bg-cover h-[295px] rounded-xl z-20"
        />
      </div>
      <div className="mx-2">
        <Image
          src={HeroImg3}
          alt="hero image"
          width={370}
          className="bg-cover h-[295px] rounded-xl z-20"
        />
      </div>
    </Carousel>
  );
};

export default MobileHeroSectionCarousel;
