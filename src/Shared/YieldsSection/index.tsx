import React from "react";
import { CardsStake } from "./StakeSection";
import { TitleSection } from "./TitleSection";

export const SectionEarnYield: React.FC = () => {
  return (
    <section className="relative w-full h-full">
      <div
        style={{
          background:
            "radial-gradient(32.27% 32.27% at 44.35% 54.57%, #523B0866 10%, #13141A 100%)",
        }}
        className="absolute rounded-full w-[600px] h-[1200px] lg:w-[100vw] -left-56 lg:-left-[600px] bottom-[900px] top-0 lg:top-[-80px] "
      />

      <div
        style={{
          background:
            "radial-gradient(32.27% 32.27% at 44.35% 54.57%, #3961FB33  10%, #13141A 100%)",
        }}
        className="absolute rounded-full w-[400px] lg:w-[100vw] -right-60 lg:-right-[500px] -bottom-[300px] top-0 lg:bottom-[100px] lg:size-[1200px]"
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
