import React from "react";

const MultiplierIcons = () => (
  <div className="flex  flex-col lg:flex-row items-center gap-3">
    <div className="flex items-center space-x-2 lg:space-x-4">
        <img
        
          src={'/img/multipliers.webp'}
          alt={''}
          className="w-auto h-[42px]"
        />
    </div>
    <p className="text-gray-400 text-xs">All Boost Multipliers</p>
  </div>
);

export default MultiplierIcons;

