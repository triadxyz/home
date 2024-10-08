import { cn } from "@/utils/cn";
import { permanent_marker } from "@/utils/fonts";
import Image from "next/image";
import Diamond from "../../../../public/svg/diamond.svg";

export const TitleSection: React.FC = () => {
  return (
    <div className="w-full px-4 lg:px-0">
      <div className="bg-white/10 backdrop-blur-xl h-6 w-fit px-2 border border-white/10 justify-center rounded flex items-center mb-2 mt-20">
        <span className="text-xs font-normal text-white/80">
          + Boost + Rewards
        </span>
      </div>
      <div className="flex items-center gap-[10px]">
        <h1 className="text-5xl text-white">
          Earn{" "}
          <span className={cn("text-fire-yellow", permanent_marker.className)}>
            YIELD
          </span>
        </h1>
        <div className="bg-white/10 p-1 rounded-full flex items-center justify-center size-8">
        <Image src={Diamond} width={18} height={18} alt="Diamond" />
        
        </div>

      
      </div>
      <p className="mt-2 w-3/4 text-fire-gray-medium font-medium text-sm ">
          Deposit and stake the NFT collection with Revenue Share. By staking,
          you will be entitled to participate in the dividends.
        </p>
    </div>
  );
};
