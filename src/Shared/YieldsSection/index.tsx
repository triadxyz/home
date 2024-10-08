import React from "react";
import { CardsStake } from "./StakeSection";
import { TitleSection } from "./TitleSection";

export const SectionEarnYield: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1330px] my-10 lg:my-40 mx-auto">
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
  );
};
