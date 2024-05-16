"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WhiteList } from "@/components/WhiteList";
import Image from "next/image";

const WhiteListPage: React.FC = () => {
  const [formStarted, setFormStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const updateCurrentIndex = useCallback((index: number) => {
    setCurrentQuestionIndex(index);
  }, []);

  return (
    <div className="flex flex-col h-full w-screen">
      <div className="flex flex-col relative z-10 h-full px-4">
        <div className="h-[calc(100vh-70px)] w-full max-w-[1330px] mx-auto flex flex-col justify-center">
          <div
            className={`transition-opacity duration-500 w-full ${
              currentQuestionIndex !== 0 ? "opacity-0 invisible hidden" : "opacity-100"
            }`}
          >
            <div className="relative flex items-center justify-center mx-auto mt-14 lg:mt-0 flex-col z-10 px-0">
              <div className="absolute max-[768px]:w-full h-[500px] -top-1/5 left-1/2 -translate-x-1/2">
                <Image
                  width={800}
                  height={500}
                  objectFit="cover"
                  className="h-full"
                  src={require("../../../public/img/blur.png")}
                  alt=""
                />
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

export default WhiteListPage;
