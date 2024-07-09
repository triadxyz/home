import Image from "next/image";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Footer: React.FC = () => {
  return (
    <div className="bg-[#1F2026] flex w-full rounded-tl-[50px] rounded-tr-[50px] lg:h-[204px]  px-4 lg:px-0">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="w-full flex flex-col gap-y-3 lg:gapy-0 lg:flex-row lg:items-center pt-10 border-b border-[#2E3038] pb-6">
          <Image
            className="mr-6 mb-6 lg:mb-0"
            src="img/logo-triad.svg"
            width={100}
            height={37}
            alt="logo"
          />
          <span className="text-sm text-[#A1A7BB] mr-5">
            <span className="text-xl mr-4 text-[#FFFFFF33]">•</span>TRIAD ©
            2024. All Rights Reserved.
          </span>
          <span className="text-sm text-white mr-5">
            <span className="text-xl mr-4 text-[#FFFFFF33]">•</span>
            Terms and Conditions
          </span>
          <span className="text-sm text-white">
            <span className="text-xl mr-4 text-[#FFFFFF33]">•</span> Privacy
            Policy
          </span>

          <div className="my-5 border-b border-[#2E3038]"></div>

          <p className="font-light text-[#A1A7BB] text-sm block  lg:hidden">
            The ticker prices are derived from cryptocurrencies and various
            other factors that contribute to significant volatility in the
            investment market. These values are not static and fluctuate based
            on market sentiment. At Triad Finance, we offer a sophisticated way
            to invest in the Solana ecosystem. We recommend that you carefully
            assess the risks mentioned above and be fully aware.
          </p>

          <div className="flex items-center lg:ml-auto mt-7 lg:mt-0 flex-wrap">
            <span className="text-sm text-[#A1A7BB] mr-4">Powered by:</span>

            <div className="flex">
            <Link href="https://twitter.com/PythNetwork">
              <img src="img/pyth.svg" alt="pyth network" />
            </Link>
            </div>


          </div>
        </div>

        <p className="font-light text-[#A1A7BB] text-sm mt-5 hidden lg:block">
          The ticker prices are derived from cryptocurrencies and various other
          factors that contribute to significant volatility in the investment
          market. These values are not static and fluctuate based on market
          sentiment. At Triad Finance, we offer a sophisticated way to invest in
          the Solana ecosystem. We recommend that you carefully assess the risks
          mentioned above and be fully aware.
        </p>
      </div>

      {/* <div className="flex items-center justify-between px-4 w-full mx-auto ">
        <span className="text-sm text-white/30 ">TRIAD © 2024</span>

        <span className="text-sm text-white/30 flex items-center gap-x-2">
          Powered by{" "}
          <a href="https://twitter.com/triadfi">
            <span className="text-sm font-semibold gradient-text">
              Triad Labs
            </span>
          </a>
        </span>
      </div> */}
    </div>
  );
};
