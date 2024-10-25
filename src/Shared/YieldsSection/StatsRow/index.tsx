"use client";

import { useGlobal } from "@/context/global";
import { useSwap } from "@/context/swap";
import { cn } from "@/utils/cn";
import { formatCurrency } from "@/utils/formatCurrency";
import React, { useEffect, useMemo } from "react";

const StatsRow: React.FC = () => {
  const { globalStake, getGlobalStake, loadingValues } = useGlobal();
  const { triadValue, solValue, loading: swapLoading } = useSwap();

  const calcTriadSum: number = useMemo(() => {
    if (swapLoading || !globalStake) return 0;

    const calcStakedInSol = solValue * (globalStake.floorPrice || 0);
    const sumFloorNftUsdc = calcStakedInSol * (globalStake.nftStaked || 0);
    const calcStakedTokenUsdc = (globalStake.tokensStaked || 0) * triadValue;

    return sumFloorNftUsdc + calcStakedTokenUsdc;
  }, [swapLoading, globalStake, solValue, triadValue]);

  useEffect(() => {
    void getGlobalStake();
  }, [getGlobalStake]);

  const statsData = useMemo(
    () => [
      {
        id: 1,
        value: `${formatCurrency(calcTriadSum)}`,
        label: "Value Staked ($)",
        valueColor: "text-green-400",
      },
      { id: 2, value: "7.5x", label: "Max Boost", valueColor: "text-white" },
      {
        id: 3,
        value: `${formatCurrency(globalStake?.tokensStaked || 0)?.replace(
          "$",
          ""
        )}`,
        label: "Total Staked ($TRD)",
        valueColor: "text-white",
      },
    ],
    [calcTriadSum, globalStake?.tokensStaked]
  );

  return (
    <div className="sm:flex justify-around  px-2 lg:px-4 block w-full sm:bg-white/5 sm:border border-white/10 py-5 rounded-lg text-center h-auto">
      {statsData.map((stats, index) => (
        <div
          key={stats.id}
          className="space-y-1 mt-0.5 border-r border-white/10 last-of-type:border-none lg:pr-16 flex items-center justify-center flex-col max-[768px]:rounded lg:mt-0 h-[72px] bg-white/5 sm:bg-transparent"
        >
          <p
            className={cn(
              `text-lg sm:text-2xl font-medium`,
              index === 0 ? "text-[#00B471]" : "text-white"
            )}
          >
            {loadingValues ? (
              <div className="bg-gray-400 animate-pulse rounded h-6 w-16"></div>
            ) : (
              stats.value
            )}
          </p>
          <p className="text-gray-400 text-xs">{stats.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
