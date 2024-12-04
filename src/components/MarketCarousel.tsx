"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useGlobal } from "@/context/global";
import { cn } from "@/utils/cn";
import { permanent_marker } from "@/utils/fonts";

interface MarketCardProps {
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

const MarketCard: React.FC<MarketCardProps> = ({ logo, description }) => {
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
            "w-full max-w-[350px] lg:max-w-[430px] lg:w-[430px] h-[170px]"
          )}
        >
          <div className="flex mb-2">
            <Image
              src={logo}
              alt={description}
              width={44}
              height={44}
              className="mr-2"
            />
            <div className="flex flex-col items-start">
            <p className="text-white text-xs lg:text-base">
              {description}
            </p>
            </div>
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
  const { allMarkets, fetchMarkets, loadingMarkets } = useGlobal();

  useEffect(() => {
    void fetchMarkets();
  }, [fetchMarkets]);

  const filteredMarkets = useMemo(() => {
    return allMarkets.filter((market) => market.isActive);
  }, [allMarkets]);

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
  };

  return (
    <div className="w-full mt-16">
    <div className="max-w-[100vw]">
      {loadingMarkets? (
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, key) => (
            <div
              className="w-full lg:w-[430px] h-[170px] animate-loading rounded-md"
              key={key}
            ></div>
          ))}
        </div>
      ) : (
        <Slider {...settings}>
          {filteredMarkets.map((market, index) => (
            <div key={index}>
              <MarketCard
                logo={market.image}
                description={market.question}
                status={"HYPE"}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  </div>
  );
};

export default MarketCarousel;
