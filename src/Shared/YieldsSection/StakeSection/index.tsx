import React from "react";
import MultiplierIcons from "../Multipliers";
import StakeCard from "@/components/CardStake";
import StatsRow from "../StatsRow";


export const CardsStake = () => {
  return (
    <div className="text-white w-full py-6 space-y-6">
      <div className="flex items-center px-2 xl:px-0 justify-start flex-col md:flex-row w-full gap-5">
        {stakeCards.map((card) => (
          <StakeCard
            key={card.id}
            imgSrc={card.imgSrc}
            altText={card.altText}
            title={card.title}
            apr={card.apr}
            description={card.description}
            bgColor={card.bgColor}
          />
        ))}
      </div>

      <StatsRow />

      <MultiplierIcons />
    </div>
  );
};



const stakeCards = [
    {
      id: 2,
      imgSrc: "/img/nft.webp",
      altText: "TRD Icon",
      title: "Stake $TRD",
      apr: "11.05%",
      description: "Stake your $TRD and earn yield automatically. Boost your returns with Market Making and Staking Vaults.",
      bgColor: "bg-fire-blue-medium",
    },
  ];
