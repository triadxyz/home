import { cn } from "@/utils/cn";
import React, { useMemo } from "react";

const StatsRow: React.FC = () => {
  const statsData = useMemo(() => [
    { id: 1, value: "$1,313,898.00 ", label: "Value Staked ($)", valueColor: "text-green-400" },
    { id: 2, value: "7.5x", label: "Max Boost", valueColor: "text-white" },
    { id: 3, value: "12,199,592.91", label: "Total Staked ($TRD)", valueColor: "text-white" },
  ], []);

  return (
    <div className="sm:flex justify-around block w-full sm:bg-white/5 sm:border border-white/10 py-5 lg:px-4 rounded-lg text-center h-auto">
      {statsData.map((stat, index) => (
        <div key={stat.id} className="space-y-1 mt-0.5 border-r border-white/10 last-of-type:border-none pr-16 flex items-center justify-center flex-col max-[768px]:rounded lg:mt-0 h-[72px] bg-white/5 sm:bg-transparent">
          <p className={cn(`text-lg sm:text-2xl font-medium`, index === 0 ? 'text-[#00B471]' : 'text-white')}>{stat.value}</p>
          <p className="text-gray-400 text-xs">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
