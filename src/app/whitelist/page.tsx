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
