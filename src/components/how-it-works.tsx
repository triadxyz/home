import React from "react";
import { Permanent_Marker } from "next/font/google";

const permanent_maker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const HowItWorks: React.FC = () => {
  return (
    <div className="flex flex-col w-full mt-[323px]">
      <div className="w-full flex justify-between items-center">
        <span className="text-5xl text-[#A1A7BB] font-light leading-[58px]">
          How <span className="text-white font-normal">ticker prices</span> are
          <br />
          <span className="relative text-white font-normal">
            calculated?{" "}
            <img
              className="absolute -bottom-2.5 -right-6"
              src="img/icon-decoration.svg"
              alt=""
            />
          </span>
        </span>

        <div className="flex flex-col border-l-2 border-[#2E3038] pl-[72px] h-[140px] justify-center w-1/2 ml-auto">
          <span className="text-2xl font-medium text-white block mb-3">
            Market, DAO, Project Data... 📈
          </span>
          <span className="text-[#A1A7BB] text-2xl font-light">
            Market influenced by metric volatility, solely
            <br /> dependent on project.
          </span>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-10">
        <span className="text-5xl text-[#A1A7BB] font-light leading-[58px]">
          Do the{" "}
          <span className="text-white font-normal">
            listed projects <br /> earn
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

        <div className="flex flex-col border-l-2 border-[#2E3038] pl-[72px] h-[140px] justify-center w-1/2 ml-auto">
          <span className="text-2xl font-medium text-white flex mb-3">
            Operation fee &{" "}
            <span style={permanent_maker.style} className="text-[#F2BE47] mx-2">
              Points
            </span>{" "}
            <img src="img/point.svg" alt="" />
          </span>
          <span className="text-[#A1A7BB] text-2xl font-light">
            Each operation in the project generates a{" "}
            <span className="text-white font-normal">value</span> <br /> in{" "}
            <span className="text-white font-normal">percentage</span>{" "}
            and <span className="text-white font-normal">points</span> in our
            first season.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
