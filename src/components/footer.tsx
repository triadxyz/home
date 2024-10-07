import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="bg-[#1F2026] flex w-full rounded-tl-[50px] rounded-tr-[50px] lg:h-[204px] px-4 lg:px-0 lg:mt-0 mt-[140px]">
      <div className="w-full max-w-[1330px] mx-auto">
        <div className="w-full flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:items-center pt-10 border-b border-[#2E3038] pb-6">
          <div className="flex items-center justify-between">
            <Image
              className="mr-6 mb-6 lg:mb-0"
              src="img/logo-triad.svg"
              width={100}
              height={37}
              alt="logo"
            />
            <div className="flex items-center gap-x-6 lg:hidden">
              <Link
                href="https://twitter.com/triadfi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={25}
                  height={20}
                  className="hover:opacity-50 transition-all"
                  src="/img/icon-x.svg"
                  alt="bg"
                />
              </Link>
              <Link
                href="https://docs.triadfi.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={25}
                  height={20}
                  className="hover:opacity-50 transition-all"
                  src="/img/icon-discord.svg"
                  alt="docs"
                />
              </Link>
            </div>
          </div>

          <span className="text-sm text-[#A1A7BB] mr-5">
            <span className="text-xl mr-4 text-[#FFFFFF33]">•</span>TRIAD © 2024. All Rights Reserved.
          </span>
          <span className="text-sm text-white mr-5">
            <span className="text-xl mr-4 text-[#FFFFFF33]">•</span> Terms and Conditions
          </span>
          <span className="text-sm text-white">
            <span className="text-xl mr-4 text-[#FFFFFF33]">•</span> Privacy Policy
          </span>

          <div className="my-5 border-b border-[#2E3038]"></div>

          <p className="font-light text-[#A1A7BB] text-sm block lg:hidden">
            The prices are derived from cryptocurrencies and various factors that drive significant volatility in the investment market. These values fluctuate with market sentiment.
            At Triad Finance, we provide a sophisticated approach to investing in the Solana ecosystem.
            We encourage you to carefully evaluate these risks and stay fully informed.
          </p>
        </div>

        <p className="font-light text-[#A1A7BB] text-sm mt-5 hidden lg:block">
          The prices are derived from cryptocurrencies and various factors that drive significant volatility in the investment market. These values fluctuate with market sentiment. 
          At Triad Finance, we provide a sophisticated approach to investing in the Solana ecosystem. 
          We encourage you to carefully evaluate these risks and stay fully informed.
        </p>
      </div>
    </div>
  );
};
