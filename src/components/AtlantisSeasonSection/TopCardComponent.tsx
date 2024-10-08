import React from 'react';
import Image from 'next/image';
import DefaultCard from "@/components/DefaultCard";

interface TopCard {
  title: string;
  description: string;
  icon: string;
}

const topCards: TopCard[] = [
  {
    title: "Quest",
    description: "Explore Atlantis and recover ancient artifacts. Complete challenges and earn rewards!",
    icon: "/img/quest-icon.webp",
  },
  {
    title: "Tridents",
    description: "Collect Tridents by completing quests. More Tridents, bigger airdrop reward.",
    icon: "/img/trident-icon.webp",
  },
  {
    title: "Multiplier",
    description: "Get Multipliers to boost your Trident earnings.",
    icon: "/img/multiplier-icon.webp",
  },
];

const TopCardComponent: React.FC<TopCard> = ({ title, description, icon }) => (
  <DefaultCard className="h-full w-full flex justify-start p-4">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4 w-[88px] h-[88px]">
        <Image
          src={icon}
          alt={title}
          width={88}
          height={88}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="ml-2 text-lg">→</span>
        </div>
        <p className="text-base">{description}</p>
      </div>
    </div>
  </DefaultCard>
);

export { TopCardComponent, topCards };