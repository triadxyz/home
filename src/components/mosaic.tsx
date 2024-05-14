/* eslint-disable @next/next/no-img-element */
import React from "react";

const Mosaic: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-x-5 justify-between mb-5">
        <img className="h-[293px] w-1/2" src="img/banner-1.webp" alt="" />

        <img className="h-[293px] w-1/2" src="img/banner-2.webp" alt="" />
      </div>

      <div className="flex items-center gap-5">
        <div className="w-[67%] flex flex-col gap-5">
          <div className="w-full flex gap-5">
            <img src="img/banner-6.webp" alt="" className="w-full h-[255px]" />
            <img src="img/banner-4.webp" alt="" className="w-full h-[255px]" />
          </div>
          <div className="flex w-full gap-5">
            <img src="img/banner-3.webp" alt="" className="w-full h-[255px]" />
            <img src="img/banner-5.webp" alt="" className="w-full h-[255px]" />
          </div>
        </div>

        <div className="w-[33%]">
          <img src="img/banner-app.webp" alt="" className="w-full h-[530px]" />
        </div>
      </div>
    </div>
  );
};

export default Mosaic;
