/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhiteList } from "@/components/WhiteList";
import Image from "next/image";

const Home: React.FC = () => {
  const [formStarted, setFormStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const updateCurrentIndex = useCallback((index: number) => {
    setCurrentQuestionIndex(index);
  }, []);

  return (
    <div
      style={{
        background: "#1F2026",
      }}
      className="flex flex-col h-screen w-screen"
    >
      <div className="flex flex-col relative z-10 h-full px-4">
        <div className="flex w-full max-w-[1330px] mx-auto justify-between items-center pt-6">
          <Link href={"/"}>
            <img src="/img/logo-triad.svg" width={100} alt="logo" />
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="https://twitter.com/triad_labs" target="_blank">
              <Image
                width={20}
                height={20}
                className="hover:opacity-50 transition-all"
                src="/img/icon-x.svg"
                alt="bg"
              />
            </Link>
          </div>
        </div>

        <div className="h-[calc(100%-70px)] w-full max-w-[1330px] mx-auto flex flex-col">
          <div
            className={`transition-opacity duration-500 w-full ${
              currentQuestionIndex !== 0 ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="relative flex items-center justify-center mx-auto mt-14 lg:mt-40 flex-col z-10 px-0">
              <div className="absolute max-[768px]:w-full h-[500px] -top-1/3 left-1/2 -translate-x-1/2">
                <Image
                  width={800}
                  height={500}
                  objectFit="cover"
                  className="h-full"
                  src={require("../../../public/img/blur.png")}
                  alt=""
                />
              </div>

              <div className="relative transition-all duration-200 text-center">
                <h1 className="text-4xl lg:text-7xl mb-3 md:px-0 text-center font-light text-[#DCDBDB]">
                  <span className="font-bold">Trade</span> the best{" "}
                  <span className="font-bold">Solana Projects</span>.{" "}
                </h1>
                <Image
                  width={16}
                  height={12}
                  className="hidden xl:block absolute bottom-[45%] -right-2.5"
                  src={require("../../../public/img/icon-decoration.svg")}
                  alt=""
                />

                <Image
                  width={16}
                  height={16}
                  className="hidden xl:block absolute bottom-[40%] -right-4"
                  src={require("../../../public/img/icon-decoration.svg")}
                  alt=""
                />
                <Image
                  width={16}
                  height={16}
                  className="hidden xl:block absolute -top-1 -left-6"
                  src={require("../../../public/img/icon-decoration.svg")}
                  alt=""
                />

                <Image
                  width={16}
                  height={16}
                  className="hidden xl:block absolute top-0 -left-5"
                  src={require("../../../public/img/icon-decoration.svg")}
                  alt=""
                />

                <span className="text-white/60 lg:text-white text-sm lg:text-lg lg:leading-8 text-center mt-4 mb-7 md:px-0">
                  We tokenize Solana projects, a new way of investing in the
                  ecosystem!
                </span>
              </div>
            </div>
          </div>
          <WhiteList
            formStarted={formStarted}
            initForm={() => setFormStarted(true)}
            currentIndex={currentQuestionIndex}
            setCurrentIndex={updateCurrentIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
