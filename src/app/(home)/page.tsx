/* eslint-disable @next/next/no-img-element */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarketCarousel from "@/components/MarketCarousel";
import ButtonTradeNow from "@/components/buttonTradeNow";
import { Metadata } from "next";
import { permanent_marker } from "@/utils/fonts";
import { cn } from "@/utils/cn";

export const metadata: Metadata = {
  title: "Triad",
  description:
    "Predict the Success or Failure of the Ecosystem.",
  openGraph: {
    title: "Triad | Home",
    description:
      "Gauge the Ecosystem's Success or Failure",
    url: "https://triadfi.co",
    siteName: "Triad",
    images: [
      {
        url: "/img/triad_lp.png",
        width: 800,
        height: 500,
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Triad Markets | Real-Value Exchange",
    description:
      "Discover the true value of projects — unaffected by market speculation.",
    images: "/img/market.png",
    card: "summary_large_image",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://app.triadfi.co",
  },
};

const GreetingBanner = () => (
  <div className="flex flex-col justify-center items-center relative lg:top-4">
    <div className="bg-white/10 px-2.5 border pr-12 border-white/20 relative w-full h-[24px] flex items-center rounded">
      <span className="text-[#A4A5A7]  max-[350px]:text-[10px] text-xs whitespace-nowrap font-normal">
        Hello Traveler, conquer the Triad Season: Atlantis!
      </span>
    <img src="/img/poseidom.svg" className="size-10 absolute right-0 bottom-0" alt="Poseidom" />

    </div>
  </div>
);

const TitleSection = () => (
  <>
    <div className="flex flex-col items-center justify-center">
    <GreetingBanner />
      <img className="max-w-[300px] lg:max-w-full" src="/img/titleHapy.svg" alt="Title Hapy" />
      <p className="lg:text-2xl text-white text-center font-normal">
        Shape the future of the Solana ecosystem with your{' '}
        <span className={cn("font-bold italic", permanent_marker.className)}>PREDICTIONS</span>
      </p>
    </div>
  </>
);

const Home: React.FC = () => {
  return (
    <div className={`flex flex-col pt-14 min-h-screen lg:pb-56`}>
      <div className="flex flex-col relative z-10 h-full px-4">
        <div className="h-full flex flex-col">
          <div className="relative flex items-center mt-16 flex-col z-10 px-0">
            <TitleSection />
            <div className="flex justify-center items-center mt-11">
              <ButtonTradeNow />
            </div>
            <MarketCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
