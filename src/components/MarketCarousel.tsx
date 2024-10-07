"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/utils/cn";
import { permanent_marker } from "@/utils/fonts";
import { settings } from "nprogress";
import { Slidersettings } from "@/constants/slider";

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
      "flex-1 h-[36px] py-1 rounded-lg text-xs font-medium backdrop-blur-[54px]",
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
    <div className="px-2">
      <Link
        href="https://app.triadfi.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className={cn(
            "bg-[#FFFFFF04] rounded-lg p-4 flex flex-col border border-[#FFFFFF29]",
            "w-[430px] h-[170px]"
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
          <p className="text-white text-[14px] flex-grow">{description}</p>
          <div className="flex w-full space-x-1">
            <StatusButton
              text="HYPE"
              bgColor="bg-[#00B47133]"
              textColor="text-[#00B471]"
            />
            <StatusButton
              text="FLOP"
              bgColor="bg-[#EE5F6733]"
              textColor="text-[#EE5F67]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

const MarketCarousel: React.FC = () => {
  return (
    <div className="w-full mt-16">
      <div className="max-w-[100vw]">
        <Slider {...Slidersettings}>
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

// utils
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
