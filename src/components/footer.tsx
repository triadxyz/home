import Image from "next/image";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Footer: React.FC = () => {
  return (
    <div className="bg-[#1F2026] flex w-full rounded-tl-[50px] rounded-tr-[50px] h-[204px]">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="w-full flex items-center pt-10 border-b border-[#2E3038] pb-6">
          <Image
            className="mr-6"
            src="img/logo-triad.svg"
            width={100}
            height={37}
            alt="logo"
          />
          <span className="text-sm text-[#A1A7BB] mr-5">
            <span className="text-xl mr-4 text-[#FFFFFF33]">•</span> TRIAD ©
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

          <div className="flex items-center ml-auto">
            <span className="text-sm text-[#A1A7BB] mr-4">Powered by:</span>

            <Link className="mr-4" href="https://twitter.com/PythNetwork">
              <img src="img/pyth.svg" alt="pyth network" />
            </Link>

            <Link href="https://twitter.com/Vybe_Network">
              <img src="img/vybe.svg" alt="vybe network" />
            </Link>
          </div>
        </div>

        <p className="font-light text-[#A1A7BB] text-sm mt-5">
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
