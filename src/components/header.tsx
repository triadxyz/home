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

  const solicialLinks = [
    {href: "https://twitter.com/triadfi", src: "/img/twitter.svg", alt: "imagem twitter" },
    {href: "https://docs.triadfi.co/", src: "/img/discord.svg", alt: "imagem discord" },
    {href: "https://docs.triadfi.co/", src: "/img/docs.svg", alt: "imagem docs" },
  ];

  return (
    <header
      className={cn("fixed lg:mt-5 px-4 z-30  h-[72px] w-full", {
        "bg-[#13141A1A] backdrop-blur-xl": bgHeader,
      })}
    >
      <div className="max-w-[1330px] w-full h-full flex mx-auto justify-between items-center">
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
        {solicialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
            >
              <Image
                width={20}
                height={20}
                className="hover:opacity-50 transition-all"
                src={link.src}
                alt={link.alt}
              />
            </Link>
          ))}
        </div>

        <Link
          className="w-fit px-5 h-8 lg:h-10 bg-[#3961FB] text-white font-medium !text-xs flex items-center justify-center rounded-md whitespace-nowrap"
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
