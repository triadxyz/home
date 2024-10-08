import React from "react";
import MultiplierIcons from "../Multipliers";
import StakeCard from "@/components/CardStake";
import StatsRow from "../StatsRow";


export const CardsStake = () => {
  return (
    <div className="text-white w-full py-6 space-y-6">
      <div className="flex items-center justify-center flex-col md:flex-row w-full gap-5">
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
      id: 1,
      imgSrc: "/img/trident.webp",
      altText: "Triad Icon",
      title: "Stake Triad",
      apr: "5.96%",
      description: "Stake your NFT and watch your earnings grow based on its rarity. The rarer the NFT, the higher the returns!",
      bgColor: "fire-yellow",
    },
    {
      id: 2,
      imgSrc: "/img/nft.webp",
      altText: "TRD Icon",
      title: "Stake $TRD",
      apr: "11.05%",
      description: "Stake your $TRD and earn yield automatically. Boost your returns with Market Making and Staking Vaults.",
      bgColor: "fire-blue-medium",
    },
  ];