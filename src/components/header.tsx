"use client";

import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex w-full max-w-[1240px] mx-auto justify-between items-center pt-6 px-4 xl:px-0 z-20 relative">
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
  );
};

export default Header;
