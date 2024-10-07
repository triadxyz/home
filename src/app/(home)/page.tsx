/* eslint-disable @next/next/no-img-element */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BetaLaunchButton from "@/components/buttonBetaLaunch";
import MarketCarousel from "@/components/MarketCarousel";
import { Metadata } from "next";
import { inter } from "@/utils/fonts";

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
    images: "/assets/img/markets.png",
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

const Home: React.FC = () => {
  return (
    <div className={`${inter.className} flex flex-col min-h-screen lg:pb-56`}>
      <div className="flex flex-col relative z-10 h-full px-4">
        <div className="h-full w-full  mx-auto flex flex-col">
          <div className="relative flex items-center mx-auto mt-14 flex-col z-10 px-0">
            <div className="relative transition-all duration-200 text-center">
              <div className="tradeText flex flex-col justify-center items-center">
                <img 
                  src="/img/titleHapy.svg"
                  alt="" 
                 />   
                 <img
                    src="/img/TRADE ANYTHING FROM WEB3.svg"
                    alt="" 
                    className="imagemLTrade"
                  />
                 <img
                    src="/img/tradeMobile.svg"
                    alt="" 
                    className="imagemLTradeMobile"
                  />
              </div>
              <div className="flex justify-center items-center mt-16">
                <BetaLaunchButton />  
                
              </div>
              <MarketCarousel />
              {/* <div className="mt-20 mb-14 grupoNamesMobile flex justify-center items-center">
                <img
                  src="img/Group 41386.png"
                  alt=""
                  className="h-32 w-max imagemLatter"
                />
                <img
                  src="img/grupoNamesMobile.svg"
                  alt=""
                  className="imagemLatter2"
                />
              </div> */}
            </div>
            {/* <Mosaic /> */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
