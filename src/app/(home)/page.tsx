/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mosaic from "@/components/mosaic";
import BetaLaunchButton from "@/components/buttonBetaLaunch";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen lg:pb-56">
      <div className="flex flex-col relative z-10 h-full px-4">
        <div className="h-full w-full max-w-[1240px] mx-auto flex flex-col pt-12 lg:pt-24">
          <div className="relative flex items-center mx-auto mt-14 flex-col z-10 px-0">
            <div className="relative transition-all duration-200 text-center">
              <div className="flex flex-col justify-center items-center">
                <img 
                  src="/img/titleHapy.svg"
                  alt="" 
                 />   
                 <img
                    src="/img/TRADE ANYTHING FROM WEB3.svg"
                    alt="" 
                  />
              </div>
              <div className="flex justify-center items-center mt-16">
                <BetaLaunchButton />  
              </div>
              <div className="mt-20 mb-14">
                <img
                  src="img/Group 41386.png"
                  alt=""
                  className="h-32 w-max"
                />
              </div>
            </div>
            <Mosaic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
