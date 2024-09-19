/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";

const Mosaic: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <h2 className="pt-10 textMarket text-white font-medium mb-4">
            Market
            <span className="spanMarket"> the</span> rise <span className="spanMarket">or</span> fall <br />
            <span className="spanMarket">of the</span> Web3 hype
            <img
              className="hype-effect"
              src="img/icon-decoration.svg"
              alt=""
            />
          </h2>
        </div>
          <span 
            className="text-[#A1A7BB] text-xl font-light">The easiest way to <span className="text-white font-normal">invest</span> in the Solana ecosystem!
          </span>

        <div className="mt-10 flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
          <div className="w-full lg:w-[67%] flex flex-col gap-3 lg:gap-5">
            <div className="w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-5">
              <img
                src="img/Session 2.png"
                alt=""
                className="w-full h-[232px] lg:h-[255px]"
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-y-3 lg:gap-y-0  lg:gap-5">
              <img
                src="img/card about the APP.png"
                alt=""
                className="w-full h-[232px] lg:object-cover lg:h-[255px]"
              />
              <img
                src="img/cardHype.png"
                alt=""
                className="w-full h-[232px] lg:object-cover lg:h-[255px]"
              />
            </div>
          </div>

          <div className="w-full lg:w-[33%]">
            <img
              src="img/cardPoseidon.png"
              className="w-full lg:max-w-none lg:h-[530px] mx-auto lg:block"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mosaic;
