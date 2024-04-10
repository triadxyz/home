"use client";

import { MarketType } from "@/types/market";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Slider from "react-slick";

type TickersProps = {
  markets: MarketType[];
};

export const Tickers = ({ markets = [] }: TickersProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
  };

  function calculatePercentageChange(
    data: { value: number; timestamp: number }[]
  ): number {
    let totalPercentageChange = 0;

    const sortedData = data.sort((a, b) => a.timestamp - b.timestamp);

    for (let i = 1; i < sortedData.length; i++) {
      const currentValue = sortedData[i].value;
      const previousValue = sortedData[i - 1].value;

      const percentageChange =
        ((currentValue - previousValue) / previousValue) * 100;
      totalPercentageChange += percentageChange;
    }

    return totalPercentageChange;
  }

  return (
    <div className="slider-container mb-5 mt-20">
      <Slider {...settings}>
        {markets.map((market, index) => (
          <div key={index}>
            <div className="bg-black/40 border border-blue-600/20 rounded-xl min-h-[100px] w-[94%] p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-blue-600 text-base">{market.about.name}</h3>
                <Image
                  width={24}
                  height={24}
                  src={market.about.image}
                  alt={""}
                />
              </div>
              <div>
                <div className="flex flex-col mt-1">
                  <span className="text-sm text-white/40">{market.ticker}</span>

                  <div className="mt-2 flex justify-between">
                    <span className="text-white text-base font-medium">
                      ${market.tvl.toFixed(2)}
                    </span>
                
                      <span
                        className={cn("text-white",
                         {
                          "text-green-600": calculatePercentageChange(market.metadata.chart) > 0,
                          "text-red-600": calculatePercentageChange(market.metadata.chart) < 0
                         }
                        )}
                      >
                        {calculatePercentageChange(market.metadata.chart) === 0 ? '' : `${calculatePercentageChange(market.metadata.chart).toFixed(2)}%`}
                      </span>
               
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
