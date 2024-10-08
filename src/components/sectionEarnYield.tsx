import React from "react";
import CardsStakeTrd from "./cardsStakeTrd";
import Diamond from "../../public/svg/diamond.svg";
import { permanent_marker } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const sectionEarnYield = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1330px] my-20 mx-auto">
      <div className="flex flex-col">
        <div className="bg-white/5 px-2 h-6 w-fit border border-white/10 justify-center rounded flex items-center mb-2 mt-20">
          <span className="text-xs font-normal whitespace-nowrap text-[#ABAAA7]">
            + Boost + Rewards
          </span>
        </div>

        <div className="w-full">
          <div className="flex items-center mb-1 gap-2.5">
            <h1 className="text-5xl font-semibold text-white">
              Earn{" "}
              <span
                className={cn("text-[#F2BE47]", permanent_marker.className)}
              >
                YIELD
              </span>
            </h1>
            <div className="p-2.5 bg-white/5 backdrop-blur-xl size-5 rounded-full">
              <Image src={Diamond} width={18} height={18} alt="Diamond" />
            </div>
          </div>
          <p className="font-medium w-3/4 text-sm lg:text-base text-fire-gray-medium">
            Deposit and stake the NFT collection with Revenue Share. By staking,
            you will be entitled to participate in the dividends.
          </p>
            <CardsStakeTrd />
        </div>
      </div>

      <div className="w-full block lg:flex">
        <div className="w-full border-2 border-red-400">
          {/* duas imagens */}
        </div>
      </div>
    </div>
  );
};

export default sectionEarnYield;
