"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [bgHeader, setBgHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setBgHeader(true);
      } else {
        setBgHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 xl:px-0 px-4 z-30 h-[76px] w-full",
        {
          "bg-[#13141A1A] backdrop-blur-xl": bgHeader,
        }
      )}
    >
      <div className="max-w-[1240px] w-full h-full flex mx-auto justify-between items-center">
        <Link href={"/"}>
          <Image
            className="z-20 relative"
            src="/img/logo-triad.svg"
            width={100}
            height={37}
            alt="logo"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="https://twitter.com/triadfi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={20}
              height={20}
              className="hover:opacity-50 transition-all"
              src="/img/icon-x.svg"
              alt="bg"
            />
          </Link>
        </div>

        <Link
          className="w-[140px] h-[44px] bg-[#3961FB] text-white font-medium flex items-center justify-center rounded-xl"
          href="/whitelist"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Join Whitelist
        </Link>
      </div>
    </header>
  );
};

export default Header;
