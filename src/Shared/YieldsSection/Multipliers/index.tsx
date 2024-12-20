import React from "react";

const MultiplierIcons = () => (
  <div className="flex  flex-col lg:flex-row items-center gap-3">
    <div className="flex items-center space-x-[9px] lg:space-x-4">
  
      <img src={"/svg/pickax.svg"} alt={""} className="size-10" />
      <img src={"/svg/solanaid-icon.svg"} alt={""} className="size-10" />
      <img src={"/svg/trident.svg"} alt={""} className="size-10" />
      <img src={"/svg/pyth-logo.svg"} alt={""} className="size-10" />
      <img src={"/svg/coleta.svg"} alt={""} className="size-10" />
    </div>
    <p className="text-gray-400 text-xs">All Boost Multipliers</p>
  </div>
);

export default MultiplierIcons;
