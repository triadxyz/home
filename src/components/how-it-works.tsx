import React from "react";
import { Permanent_Marker } from "next/font/google";

const permanent_maker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col w-full mt-24 lg:mt-[323px]">
      <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
        <span className="text-4xl lg:text-5xl text-[#A1A7BB] font-light lg:leading-[58px]">
          How <span className="text-white font-normal">ticker prices</span> are
          <br className="hidden lg:inline-block" />
          <span className="relative text-white font-normal ml-2">
            calculated?{" "}
            <img
              className="absolute -bottom-2.5 -right-6"
              src="img/icon-decoration.svg"
              alt=""
            />
          </span>
        </span>

        <div className="flex flex-col border-l-2 border-[#2E3038]  pl-6 lg:pl-[72px] h-[140px] justify-center lg:w-1/2 lg:ml-auto mt-11 lg:mt-0">
          <span className="text-xl lg:text-2xl font-medium text-white block mb-3">
            Market, DAO, Project Data... 📈
          </span>
          <span className="text-[#A1A7BB] text-xl lg:text-2xl font-light">
            Market influenced by metric volatility, solely
            <br /> dependent on project.
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row  justify-between lg:items-center mt-10">
        <span className="text-4xl lg:text-5xl text-[#A1A7BB] font-light lg:leading-[58px]">
          Do the{" "}
          <span className="text-white font-normal">
            listed <br className="inline-block lg:hidden" /> projects{" "}
            <br className="hidden lg:inline-block" /> earn{" "}
            <br className="inline-block lg:hidden" />
          </span>{" "}
          <span className="relative">
            anything?{" "}
            <img
              className="absolute -bottom-2.5 -right-6"
              src="img/icon-decoration.svg"
              alt=""
            />

          </span>
        </span>

        <div className="flex flex-col border-l-2 border-[#2E3038] pl-6 lg:pl-[72px] h-[140px] justify-center lg:w-1/2 lg:ml-auto mt-11 lg:mt-0">
          <span className="text-xl lg:text-2xl font-medium text-white flex mb-3">
            Operation fee &{" "}
            <span style={permanent_maker.style} className="text-[#F2BE47] mx-2">
              Points
            </span>{" "}
            <img src="img/point.svg" alt="" />
          </span>
          <span className="text-[#A1A7BB] text-xl lg:text-2xl font-light">
            Each operation in the project generates a{" "}
            <span className="text-white font-normal">value</span> <br /> in{" "}
            <span className="text-white font-normal">percentage</span> and{" "}
            <span className="text-white font-normal">points</span> in our first
            season.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
