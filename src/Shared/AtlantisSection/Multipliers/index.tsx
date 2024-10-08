import React from 'react';
import Image from 'next/image';
import { permanent_marker } from "@/utils/fonts";
import { formatCurrency } from '@/utils/formatCurrency';

interface MultiplierCard {
  title: string;
  img: string;
  attack?: number;
  defense?: number;
  damage?: number;
  durability?: number;
  financial?: number;
  multiplier: string;
}

interface ImageSize {
  width: number;
  height: number;
}

const imageSizes: Record<string, ImageSize> = {
  Poseidon: { width: 193, height: 195 },
  Moonad: { width: 179, height: 177 },
  Alligator: { width: 179, height: 177 },
  Queen: { width: 179, height: 177 },
  pickaxe: { width: 158, height: 158 },
  pyth: { width: 84, height: 84 },
};

const multipliersCards: MultiplierCard[] = [
  {
    title: "Poseidon",
    img: "/img/Poseidon.webp",
    attack: 1000000000,
    defense: 5000000000,
    multiplier: "30x",
  },
  {
    title: "Moonad",
    img: "/img/mooad.webp",
    attack: 10000,
    defense: 1500,
    multiplier: "2x",
  },
  {
    title: "Alligator",
    img: "/img/alligator.webp",
    attack: 15000,
    defense: 1200,
    multiplier: "2x",
  },
  {
    title: "Queen",
    img: "/img/queen.webp",
    attack: 500,
    defense: 20000,
    multiplier: "2x",
  },
  {
    title: "pickaxe",
    img: "/img/PICARETA.webp",
    damage: 800,
    durability: 15000,
    multiplier: "2.5x",
  },
  {
    title: "pyth",
    img: "/img/pyth.webp",
    financial: 100000,
    multiplier: "2x",
  },
];

const MultiplierCardComponent: React.FC<MultiplierCard> = ({
  title,
  img,
  attack,
  defense,
  damage,
  durability,
  financial,
  multiplier,
}) => {
  const size = imageSizes[title as keyof typeof imageSizes] || { width: 100, height: 100 };

  const stats = [
    { label: 'Attack', value: attack },
    { label: 'Defense', value: defense },
    { label: 'Damage', value: damage },
    { label: 'Durability', value: durability },
    { label: 'Financial', value: financial },
    { label: 'Multiplier', value: multiplier },
  ];

  return (
    <div className={`${permanent_marker.className} bg-[#D1C5AD] border border-black backdrop-blur-[87px] rounded-lg p-4 w-full min-w-[207px] text-center h-full min-h-[292px] max-h-[292px] lg:min-h-[276px]  flex flex-col text-[#3D3122]`}>
      <div className="flex-grow flex items-center justify-center mb-2">
        <div className="relative" style={{ width: `${size.width}px`, height: `${size.height}px` }}>
          <Image
            src={img}
            alt={title}
            width={size.width}
            height={size.height}
            className="filter brightness-[0.90] contrast-[0.90] saturate-[0.25] sepia-[0.40] hue-rotate-[5deg]"
          />
        </div>
      </div>

      <div className="text-sm">
        {stats.map((stat, index) => (
          stat.value !== undefined && (
            <div key={index} className="flex items-center justify-between">
              <span>{stat.label}</span>
              <span>{typeof stat.value === 'number' ? formatCurrency(stat.value)?.replace('$', '') : stat.value}</span>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export { MultiplierCardComponent, multipliersCards };
