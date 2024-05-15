/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";

const Mosaic: React.FC = () => {

  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="flex flex-col lg:flex-row items-center gap-x-5 gap-y-3 lg:gap-y-0 justify-between mb-5">
          <img
            className="h-[212px] lg:h-[293px] lg:w-1/2"
            src="img/banner-1.webp"
            alt=""
          />

          <img
            className="h-[212px] lg:h-[293px] lg:w-1/2"
            src="img/banner-2.webp"
            alt=""
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-[67%] flex flex-col gap-5">
            <div className="w-full flex flex-col lg:flex-row gap-y-3 lg:gap-y-0  lg:gap-5">
              <img
                src="img/banner-6.webp"
                alt=""
                className="w-full h-[212px] lg:h-[255px]"
              />
              <img
                src="img/banner-4.webp"
                alt=""
                className="w-full h-[212px] lg:h-[255px]"
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-y-3 lg:gap-y-0  lg:gap-5">
              <img
                src="img/banner-3.webp"
                alt=""
                className="w-full h-[212px] lg:h-[255px]"
              />
              <img
                src="img/banner-5.webp"
                alt=""
                className="w-full h-[212px] lg:h-[255px]"
              />
            </div>
          </div>

          <div className="w-full lg:w-[33%]">
            <img
              src="img/banner-app.webp"
              alt=""
              className="w-full lg:max-w-none lg:h-[530px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mosaic;
