"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [bgHeader, setBgHeader] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (pathname === "/") {
      setTheme("dark");
    }
  }, [pathname]);

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

  if (pathname === "/deck") {
    return null;
  }

  const solicialLinks = [
    {
      href: "https://twitter.com/triadfi",
      src: "/img/twitter.svg",
      alt: "imagem twitter",
    },
    {
      href: "https://discord.com/invite/triadfi",
      src: "/img/discord.svg",
      alt: "imagem discord",
    },
    {
      href: "https://docs.triadfi.co/",
      src: "/img/docs.svg",
      alt: "imagem docs",
    },
  ];

  return (
    <header
      className={cn("fixed lg:mt-5 px-4 z-30  h-[72px] w-full", {
        "bg-white dark:bg-[#13141A1A] backdrop-blur-xl": bgHeader,
      })}
    >
      <div className="max-w-[1330px] w-full h-full flex mx-auto justify-between items-center">
        <Link href={"/"}>
          <Image
            className="z-20 relative w-20 lg:w-[100px] dark:hidden"
            src={"/img/light-logo.webp"}
            width={100}
            height={37}
            alt="logo"
          />
          <Image
            className="z-20 relative w-20 lg:w-[100px] hidden dark:block"
            src={"/img/logo-triad.svg"}
            width={100}
            height={37}
            alt="logo"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-4">
          {solicialLinks.map((link, index) => (
            <Link
              className="bg-[#EAECF0] dark:bg-transparent rounded-md w-10 h-10 flex items-center justify-center"
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
        <div className="flex gap-x-5">
          <span className={cn("hidden", pathname !== "/" && "flex")}>
            <ThemeSwitcher />
          </span>

          <Link
            className="w-fit px-4 h-7 lg:h-10 bg-[#3961FB] text-white font-medium !text-xs flex items-center justify-center rounded-md whitespace-nowrap"
            href="https://app.triadfi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
