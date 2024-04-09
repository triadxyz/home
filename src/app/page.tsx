/* eslint-disable @next/next/no-img-element */
import { Triangle } from "@/components/Triangle";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Triad | The first Arbitrage on Solana",
};

const Home: React.FC = () => {
  const triangles = Array.from({ length: 100 }, (_, i) => (
    <Triangle
      key={i}
      id={`triangle${i}`}
      animationDuration={Math.random() * 150}
      type={Math.floor(Math.random() * 3) + 1}
      left={`${Math.random() * 100}%`}
      top={`${Math.random() * 100}%`}
    />
  ));

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #0D0E12 0.09%, #141824 44.47%, #141824 54.08%, #0D0E12 99.9%)",
      }}
      className="flex flex-col h-screen w-screen"
    >
      {triangles}

      <div className="flex flex-col relative z-10 h-full">
        <div className="flex justify-between items-center px-5 pt-6">
          <img src="/img/logo-triad.svg" width={80} alt="logo" />

          <div className="flex items-center space-x-4">
            <Link href="https://discord.gg/GAwVEz66" target="_blank">
              <img
                className="hover:opacity-50 transition-all"
                src="/img/icon-discord.svg"
                alt="bg"
              />
            </Link>

            <Link href="https://twitter.com/triadfi" target="_blank">
              <img
                className="hover:opacity-50 transition-all"
                src="/img/icon-x.svg"
                alt="bg"
              />
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center flex-col m-auto h-full z-10">
          <h1 className="text-7xl px-2 mb-3 md:px-0 text-center font-bold text-[#DCDBDB]">
            Discover. Analyze. Invest.{" "}
          </h1>
          <span className="text-[#CCCBCB] text-xl leading-8 md:w-7/12 text-center mt-5 mb-2 px-4 md:px-0">
            The easiest way to invest in the Solana ecosystem!
            <br /> Making economies accessible to a broader investor base has
            transformed nations and the world.
          </span>

          <Link href="https://app.triadfi.co" target="_blank">
            <button className="text-lg text-white bg-white/10 h-[50px] px-20 font-bold md:px-28 mt-5 rounded-[10px] border border-white/30 hover:opacity-80 transition-all">
              Launch App
            </button>
          </Link>
        </div>

        <div className="flex flex-col">
          <hr className="border-white/10 w-full" />

          <div className="flex items-center justify-between h-[70px]">
            <span className="text-sm text-white/30 pl-5">TRIAD © 2024</span>

            <span className="text-sm text-white/30 pr-5 flex items-center gap-x-1">
              Powered by{" "}
              <a href="https://pyth.network/">
                <img className="w-12" src="/img/pyth.png" alt="logo-pyth" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
