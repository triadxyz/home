import React from "react";
import { CardsStake } from "./StakeSection";
import { TitleSection } from "./TitleSection";

export const SectionEarnYield: React.FC = () => {
  return (
    <section className="relative w-full h-full">
      <div
        style={{
          background:
            "radial-gradient(32.27% 32.27% at 44.35% 54.57%, #523B0880 10%, #13141A 100%)",
        }}
        className="absolute size-[600px] rounded-full w-[100vw] hidden lg:flex left-0 lg:-left-[600px]  top-0  bottom-[100px] lg:size-[1200px]"
      />

      <div
        style={{
          background:
            "radial-gradient(32.27% 32.27% at 44.35% 54.57%, #3961FB33  10%, #13141A 100%)",
        }}
        className="absolute z-0 size-[600px] hidden lg:flex rounded-full w-[100vw] right-0 lg:-right-[800px] top-0  bottom-[100px] lg:size-[1000px]"
      />
      <div className="flex items-center relative justify-between w-full max-w-[1330px] my-10 lg:my-40 mx-auto">
        <div className="flex flex-col w-full min-[1120px]:max-w-[calc(100%-450px)] xl:max-w-[calc(100%-570px)]  gap-y-3">
          <TitleSection />

          <CardsStake />
        </div>

        <div className="w-full hidden min-[1120px]:block max-w-[450px] xl:max-w-[570px]">
          <img
            width={300}
            height={500}
            className="w-full max-w-[450px] xl:max-w-[570px] object-contain"
            src={"/img/triad-badges.webp"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
