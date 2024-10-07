"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultCard from './DefaultCard';
import { cn } from "@/utils/cn";
import { permanent_marker } from "@/utils/fonts";

interface MarketCardProps {
  name: string;
  logo: string;
  description: string;
  status: "HYPE" | "FLOP";
}

const MarketCard: React.FC<MarketCardProps> = ({
  name,
  logo,
  description,
  status,
}) => (
  <div className="px-2">
    <Link
      href="https://app.triadfi.co/"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
       <DefaultCard>
        <div className="flex items-center mb-2">
          <Image src={logo} alt={name} width={44} height={44} className="mr-2" />
          <div className="flex flex-col items-start">
            <span className="text-[#FFFFFF50] text-[12px]">Market</span>
            <h3 className="text-white font-[500]">{name}</h3>
          </div>
        </div>
        <p className="text-white text-[14px] flex-grow">{description}</p>
        <div className="flex w-full space-x-1">
        <button
            className={cn(
              "flex-1 h-[36px] py-1 rounded-lg text-xs font-medium bg-[#00B47133] text-[#00B471] backdrop-blur-[54px]",
              permanent_marker.className
            )}
          >
            HYPE
          </button>
          <button
            className={cn(
              "flex-1 py-1 rounded-lg text-xs font-medium bg-[#EE5F6733] text-[#EE5F67] backdrop-blur-[54px]",
              permanent_marker.className
            )}
          >
            FLOP
          </button>
        </div>
      </DefaultCard>
    </Link>
  </div>
);

const MarketCarousel: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: false,

    variableWidth: true,
    responsive: [
      { breakpoint: 1920, settings: { slidesToShow: 3 } },
      { breakpoint: 1600, settings: { slidesToShow: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const markets: MarketCardProps[] = [
    {
      name: "Drift Protocol",
      logo: "/img/drift-logo.svg",
      description: "Lorem ipsum dolor sit amet consectetur pellentesque",
      status: "HYPE",
    },
    {
      name: "Jupiter Exchange",
      logo: "/img/tjup-logo.svg",
      description: "Lorem ipsum dolor sit amet consectetur pellentesque",
      status: "FLOP",
    },
    {
      name: "Pyth Network",
      logo: "/img/pyth-logo.svg",
      description: "Lorem ipsum dolor sit amet consectetur pellentesque",
      status: "HYPE",
    },
  ];

  return (
    <div className="w-full mt-16 overflow-hidden">
      <div className="max-w-[100vw]">
        <Slider {...settings}>
          {markets.map((market, index) => (
            <div key={index} className="mr-4">
              <MarketCard {...market} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MarketCarousel;
