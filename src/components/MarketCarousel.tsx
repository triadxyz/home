"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cn } from "@/utils/cn";
import { permanent_marker } from "@/utils/fonts";

interface MarketCardProps {
  name: string;
  logo: string;
  description: string;
  status: "HYPE" | "FLOP";
}

const StatusButton: React.FC<{
  text: string;
  bgColor: string;
  textColor: string;
}> = ({ text, bgColor, textColor }) => (
  <button
    className={cn(
      "flex-1 h-[36px] py-1 backdrop-blur-2xl rounded text-xs font-medium",
      permanent_marker.className,
      bgColor,
      textColor
    )}
  >
    {text}
  </button>
);

const MarketCard: React.FC<MarketCardProps> = ({
  name,
  logo,
  description,
  status,
}) => {
  return (
    <div className="pr-2 min-w-[350px]">
      <Link
        href="https://app.triadfi.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className={cn(
            "bg-white/5 border border-white/10 backdrop-blur-2xl rounded-lg p-4 flex flex-col justify-between",
            "w-full lg:w-[430px] h-[170px]"
          )}
        >
          <div className="flex items-center mb-2">
            <Image
              src={logo}
              alt={name}
              width={44}
              height={44}
              className="mr-2"
            />
            <div className="flex flex-col items-start">
              <span className="text-[#FFFFFF50] text-[12px]">Market</span>
              <h3 className="text-white font-[500]">{name}</h3>
            </div>
          </div>
          <div className="flex items-center gap-x-1">
            <img className="w-6 h-6" src="/svg/quiz.svg" alt="" />
            <p className="text-white text-xs flex-grow">{description}</p>
          </div>
          <div className="flex w-full space-x-1">
            <StatusButton
              text="HYPE"
              bgColor="bg-[#192c2a]"
              textColor="text-[#00B471]"
            />
            <StatusButton
              text="FLOP"
              bgColor="bg-[#31232a]"
              textColor="text-[#EE5F67]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

const MarketCarousel: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

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
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,

          slidesToShow: 1,
        },
      },
    ],
    onInit: () => setIsInitialized(true),
  };

  return (
    <div className="w-full mt-16">
      <div className="max-w-[100vw]">
        <Slider {...settings}>
          {!isInitialized
            ? Array.from({ length: 5 }).map((_, key) => (
                <div className="w-full lg:w-[430px] h-[170px]" key={key}></div>
              ))
            : markets.map((market, index) => (
                <div key={index}>
                  <MarketCard {...market} />
                </div>
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default MarketCarousel;

// utils
const markets: MarketCardProps[] = [
  {
    name: "Drift Protocol",
    logo: "/img/drift-logo.svg",
    description:
      "Drift surpass $33M in volume on prediction markets by the end of October?",
    status: "HYPE",
  },
  {
    name: "Coleta",
    logo: "/svg/coleta.svg",
    description:
      "COLETA PFP reach 500 SOL in total volume by the end of October (based on Tensor)?",
    status: "FLOP",
  },
  {
    name: "Symmetry",
    logo: "/svg/symmetry.svg",
    description: "Symmetry's TVL exceed $5.5M by the end of October?",
    status: "FLOP",
  },
  {
    name: "undead",
    logo: "/svg/undead.svg",
    description:
      "Pikenians Undeads reach more than 1,600 holders by the end of October?",
    status: "FLOP",
  },
  {
    name: "Pyth Network",
    logo: "/img/pyth-logo.svg",
    description: "$PYTH's market cap exceed $1.5B by the end of October?",
    status: "HYPE",
  },
];
