import React from "react";
import TitleComponent from "./Title";
import { Cards, topCards } from "./Cards";
import { MultiplierCardComponent, multipliersCards } from "./Multipliers";
import MainImageComponent from "./MainImage";
import { Bubbles } from "@/components/Bubbles";

export const AtlantisSection: React.FC = () => {
  return (
    <section className="text-white w-full relative py-8 md:py-16">
      <div
        style={{
          background:
            "radial-gradient(32.27% 32.27% at 44.35% 54.57%, #01395066  10%, #13141A 100%)",
        }}
        className="absolute size-[600px] rounded-full w-[100vw] left-0 lg:-left-[600px]  top-0  bottom-[100px] lg:size-[1200px]"
      />

      <div
        style={{
          background:
            "radial-gradient(32.27% 32.27% at 44.35% 54.57%, #523B084d  10%, #13141A 100%)",
        }}
        className="absolute size-[600px] rounded-full w-[100vw] right-0 lg:-right-[800px] top-0  bottom-[100px] lg:size-[600px]"
      />
      <div className="relative z-10 lg:z-0 max-w-[1330px] mx-auto ">
        <TitleComponent />

        <div className="grid grid-cols-1 px-2 lg:px-0 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {topCards.map((card, index) => (
            <Cards key={index} {...card} />
          ))}
        </div>

        <MainImageComponent />

        <div className="flex px-2 lg:px-0 items-center relative bottom-14 lg:bottom-0 overflow-x-auto w-full lg:grid grid-cols-4 place-items-center  xl:grid-cols-6 gap-3 md:gap-4">
          {multipliersCards.map((card, index) => (
            <MultiplierCardComponent key={index} {...card} />
          ))}
        </div>
      </div>
      <Bubbles />
    </section>
  );
};
