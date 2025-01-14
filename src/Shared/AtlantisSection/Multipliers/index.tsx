import React from "react";
import Image from "next/image";
import { permanent_marker } from "@/utils/fonts";
import { formatCurrency } from "@/utils/formatCurrency";
import { cn } from "@/utils/cn";

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
    title: "Triad",
    img: "/svg/triad-card.svg",
    attack: 1000000,
    defense: 5000000,
    multiplier: "2x",
  },
  {
    title: "Poseidon",
    img: "/svg/poseidon-card.svg",
    attack: 1000000,
    defense: 5000000,
    multiplier: "60x",
  },
  {
    title: "Solana Id",
    img: "/svg/solana-card.svg",
    attack: 1000000,
    defense: 5000000,
    multiplier: "2x",
  },
  {
    title: "Coleta",
    img: "/svg/coleta-card.svg",
    attack: 500,
    defense: 20000,
    multiplier: "2x",
  },
  {
    title: "pickaxe",
    img: "/svg/pickax-card.svg",
    damage: 800,
    durability: 15000,
    multiplier: "2.5x",
  },
  {
    title: "pyth",
    img: "/svg/pyth-card.svg",
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
  const size = imageSizes[title as keyof typeof imageSizes] || {
    width: 100,
    height: 100,
  };

  const stats = [
    { label: "Attack", value: attack },
    { label: "Defense", value: defense },
    { label: "Damage", value: damage },
    { label: "Durability", value: durability },
    { label: "Financial", value: financial },
    { label: "Multiplier", value: multiplier },
  ];

  return (
    <Image
      src={img}
      alt={title}
      width={size.width}
      height={size.height}
      className={cn(
        "filter brightness-[0.90] contrast-[0.90] saturate-[0.25] sepia-[0.40] hue-rotate-[5deg] w-full min-h-[276px]"
      )}
    />
  );
};

export { MultiplierCardComponent, multipliersCards };
