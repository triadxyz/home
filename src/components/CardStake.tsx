import { cn } from "@/utils/cn";
import { permanent_marker } from "@/utils/fonts";
import React from "react";
interface StakeCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  apr: string; 
  description: string;
  bgColor: string; 
}

const StakeCard: React.FC<StakeCardProps> = ({ imgSrc, altText, title, apr, description, bgColor }) => (
  <div className="bg-white/5 hover:bg-white/10 p-8 h-[370px] w-full max-w-[370px] flex items-center justify-between flex-col rounded-lg border border-white/10 shadow-md backdrop-blur-xl">
    <div>
      <div className="flex justify-center">
        <img src={imgSrc} alt={altText} className="w-20 h-20" />
      </div>
      <div className="text-center ">
        <div className="flex items-center justify-center gap-2 mt-4 mb-5 lg:my-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className={cn(`bg-${bgColor} text-xs font-medium px-2 py-1 rounded`, apr.includes('11.05') ? 'text-white' : 'text-black')}>
            {apr} APR
          </span>
        </div>
        <p className="text-white/80 text-sm mt-2">{description}</p>
      </div>
    </div>
    <button className={cn(`text-white w-full max-w-[200px] bg-white/10 hover:bg-fire-blue-medium py-2 rounded-md`, permanent_marker.className)}>
    EARN NOW
    </button>
  </div>
);

export default StakeCard;
