"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const pathname = usePathname()
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

  if(pathname === '/deck') {
    return null
  }

  return (
    <header
      className={cn("fixed left-0 top-0 xl:px-0 px-4 z-30 h-[50px] w-full", {
        "bg-[#13141A1A] backdrop-blur-xl": bgHeader,
      })}
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
          <Link
            href="https://docs.triadfi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={20}
              height={20}
              className="hover:opacity-50 transition-all"
              src="/img/icon-discord.svg"
              alt="docs"
            />
          </Link>
        </div>

        <Link
          className="w-fit h-[30px] px-2 bg-[#3961FB] text-white font-medium !text-xs flex items-center justify-center rounded-md whitespace-nowrap"
          href="https://app.triadfi.co/"
          target="_blank"
          rel="noopener noreferrer"
          >
            Launch App
        </Link>
      </div>
    </header>
  );
};

export default Header;
