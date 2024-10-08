import React from "react";

const MultiplierIcons = () => (
  <div className="flex items-center p-4 gap-3">
    <div className="flex items-center space-x-4">
      {allMultipliers.map((multiplier) => (
        <img
          key={multiplier.id}
          src={multiplier.src}
          alt={multiplier.alt}
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"
        />
      ))}
    </div>
    <p className="text-gray-400 text-xs">All Boost Multipliers</p>
  </div>
);

export default MultiplierIcons;

const allMultipliers = [
  { id: 1, src: "icon1.png", alt: "Multiplier 1" },
  { id: 2, src: "icon2.png", alt: "Multiplier 2" },
  { id: 3, src: "icon3.png", alt: "Multiplier 3" },
  { id: 4, src: "icon4.png", alt: "Multiplier 4" },
  { id: 5, src: "icon5.png", alt: "Multiplier 5" },
];
