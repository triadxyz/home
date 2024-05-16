/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/header";
import Island from "@/components/island";
import Mosaic from "@/components/mosaic";
import HowItWorks from "@/components/how-it-works";
import News from "@/components/news";

const Home: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen w-screen pb-32 lg:pb-56">
      <div className="flex flex-col relative z-10 h-full px-4">
        <Header />

        <div className="h-full w-full max-w-[1240px] mx-auto flex flex-col pt-12 lg:pt-24">
          <div
            className={`transition-opacity duration-500 w-full`}
          >
            <div className="relative flex items-center mx-auto lg:mt-14 flex-col z-10 px-0">
              <div className="relative transition-all duration-200 text-center">
                <Island />
                <img
                  className="absolute max-[768px]:w-full lg:w-[900px] h-[600px] lg:h-[750px] -top-[60%] left-1/2 -translate-x-1/2"
                  src="/img/blur.png"
                  alt=""
                />
                <h1 className="text-5xl lg:text-7xl mb-3 md:px-0 text-center font-light text-white">
                  <span className="font-medium">Trade</span> the best <br />
                  <span className="font-medium">Solana-Projects</span>
                </h1>
                <img
                  className="hidden xl:block absolute top-12 left-[120px]"
                  src="img/icon-decoration.svg"
                  alt=""
                />

                <img
                  className="hidden xl:block absolute bottom-[85px] right-[105px]"
                  src="img/icon-decoration.svg"
                  alt=""
                />

                <h2 className="text-white lg:text-white text-lg lg:text-2xl block lg:leading-8 font-light text-center mt-8 mb-7 md:px-0">
                  We <span className="text-[#3961FB]">tokenize</span> Solana
                  projects, a new way to investing in the ecosystem!
                </h2>
              </div>

              <div className="relative mt-5">
                <Link
                 href="/whitelist"
                className="w-[340px] h-16 rounded-2xl bg-[#2E3038] pl-4 pr-1 flex items-center justify-between">
                  <div className="text-white">
                    <span className="block font-medium text-sm lg:text-base">
                      ALPHA Launch
                    </span>
                    <span className="text-xs lg:text-sm font-light">
                      Secure your entry for the future
                    </span>
                  </div>

                  <button className="bg-[#1F2026] w-16 h-14 flex items-center justify-center rounded-xl hover:bg-[#1F2026]/70 transition-all duration-200">
                    <img src="img/icon-arrow-right.svg" alt="" />
                  </button>
                </Link>
              </div>

              <div className="w-full mt-28">
                <h3 className="relative text-[#A1A7BB] tracking-[2%] mb-5 font-light text-4xl lg:text-6xl lg:leading-[72px]">
                  <span className="font-medium text-white">Market</span> the{" "}
                  <span className="font-medium text-white">rise</span> or{" "}
                  <span className="font-medium text-white">fall</span>{" "}
                  <br className="hidden lg:inline-block" />
                  of <span className="font-medium text-white">Projects</span>
                  <img
                    className="hidden xl:block absolute bottom-[0px] left-[25%]"
                    src="img/icon-decoration.svg"
                    alt=""
                  />
                </h3>

                <h4 className="font-light text-lg lg;text-xl text-[#A1A7BB] mb-10">
                  The easiest way to{" "}
                  <span className="font-medium text-white">invest</span> in the
                  Solana ecosystem!
                </h4>
              </div>

              <Mosaic />

              <HowItWorks />

              <div className="relative w-full mt-24 lg:mt-52 mb-40 lg:h-[655px]">
                <img
                  className="absolute left-0 top-0 w-full h-[1333px] lg:h-[655px] hidden lg:block"
                  alt=""
                  src="img/how-it-works-bg.webp"
                />

                <img
                  className=" absolute left-0 top-0 w-full object-cover h-[1333px] lg:h-[655px] lg:hidden"
                  alt=""
                  src="img/bg-how-it-works-mobile.svg"
                />

                <div className="w-full relative flex items-center flex-col pt-28">
                  <span className="relative text-[#A1A7BB] text-4xl lg:text-6xl mb-5 font-light">
                    <img
                      className="absolute -top-2.5 -left-6"
                      src="img/icon-decoration.svg"
                      alt=""
                    />
                    <span className="font-medium text-white">How</span> it all{" "}
                    <span className="font-medium text-white">works</span>
                    <img
                      className="absolute -bottom-2.5 -right-6 "
                      src="img/icon-decoration.svg"
                      alt=""
                    />
                  </span>

                  <img
                    className="w-full h-[313px] hidden lg:block"
                    src="img/how-it-works.webp"
                    alt=""
                  />
                  <img
                    className=" h-auto lg:hidden"
                    src="img/how-it-works-mobile.svg"
                    alt=""
                  />
                </div>
              </div>

              <News />
            </div>
          </div>
          {/* <WhiteList
            formStarted={formStarted}
            initForm={() => setFormStarted(true)}
            currentIndex={currentQuestionIndex}
            setCurrentIndex={updateCurrentIndex}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
