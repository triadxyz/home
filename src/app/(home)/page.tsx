/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhiteList } from "@/components/WhiteList";
import Image from "next/image";
import Header from "@/components/header";
import Island from "@/components/island";
import Mosaic from "@/components/mosaic";

const Home: React.FC = () => {
  const [formStarted, setFormStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const updateCurrentIndex = useCallback((index: number) => {
    setCurrentQuestionIndex(index);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen pb-20">
      <div className="flex flex-col relative z-10 h-full px-4">
        <Header />

        <div className="h-full w-full max-w-[1240px] mx-auto flex flex-col pt-24">
          <div
            className={`transition-opacity duration-500 w-full ${
              currentQuestionIndex !== 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="relative flex items-center mx-auto mt-14 flex-col z-10 px-0">
              <div className="relative transition-all duration-200 text-center">
                <Island />
                <img
                  className="absolute max-[768px]:w-full lg:w-[900px] h-[750px] -top-[60%] left-1/2 -translate-x-1/2"
                  src="/img/blur.png"
                  alt=""
                />
                <h1 className="text-4xl lg:text-7xl mb-3 md:px-0 text-center font-light text-[#DCDBDB]">
                  <span className="font-medium">Trade</span> the best <br />
                  <span className="font-medium">Solana Projects</span>
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

                <h2 className="text-white/60 lg:text-white text-sm lg:text-2xl block lg:leading-8 font-light text-center mt-8 mb-7 md:px-0">
                  We <span className="text-[#3961FB]">tokenize</span> Solana
                  projects, a new way to investing in the ecosystem!
                </h2>
              </div>

              <div className="relative mt-5">
                <div className="w-[340px] h-16 rounded-2xl bg-[#2E3038] pl-4 pr-1 flex items-center justify-between">
                  <div className="text-white">
                    <span className="block font-medium">ALPHA Launch</span>
                    <span className="text-sm font-light">
                      Secure your entry for the future
                    </span>
                  </div>

                  <button className="bg-[#1F2026] w-16 h-14 flex items-center justify-center rounded-xl hover:bg-[#1F2026]/70 transition-all duration-200">
                    <img src="img/icon-arrow-right.svg" alt="" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-x-5 justify-between mt-28">
                <img
                  className="h-[293px] w-1/2"
                  src="img/banner-1.webp"
                  alt=""
                />

                <img
                  className="h-[293px] w-1/2"
                  src="img/banner-2.webp"
                  alt=""
                />
              </div>

              <div className="w-full mt-48">
                <h4 className="text-white font-medium text-6xl">
                  <span className="font-light">Keep</span> BUILDING 🏗️
                </h4>
                <h3 className="text-[#A1A7BB] font-light text-xl mt-4 mb-10">
                  The easiest way to{" "}
                  <span className="font-medium text-white">invest</span> in the
                  Solana ecosystem!
                </h3>
              </div>

              <Mosaic />

              <div
                style={{
                  background:
                    "linear-gradient(90deg, #1F2026 0%, #2E3038 49.79%, #1F2026 100%)",
                }}
                className="w-full mt-5 h-[440px] rounded-[40px] flex items-center flex-col pt-7 px-20"
              >
                <span className="text-white tracking-[2%] text-3xl mb-5 font-light border-dashed border-b border-white/40">
                  <span className="font-normal">How</span> it all{" "}
                  <span className="font-normal">works</span>
                </span>

                <img
                  className="w-full h-[313px]"
                  src="img/how-it-works.webp"
                  alt=""
                />
              </div>
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
