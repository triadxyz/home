"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socialLinks = [
  {
    href: "https://twitter.com/triadfi",
    src: "/img/icon-x.svg",
    alt: "Twitter Icon",
  },
  {
    href: "https://docs.triadfi.co/",
    src: "/img/discord.svg",
    alt: "Discord Icon",
  },
];

const footerLinks = [
  {
    text: "Terms and Conditions",
    className: "text-[#FFFFFF33]",
    href: "/terms",
  },
  {
    text: "Privacy Policy",
    className: "text-[#FFFFFF33]",
    href: "/privacy",
  },
];

export const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn("bg-[#13141A1A] backdrop-blur-xl left-0", {
        "fixed bottom-0 right-0": pathname !== "/",
      })}
    >
      <div className={cn("flex w-full h-full lg:flex-col px-4")}>
        <div className="w-full max-w-[1330px] mx-auto">
          <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:items-center py-5">
            <div className="flex items-start w-full flex-col lg:flex-row lg:items-center mr-auto lg:pb-4">
              <Image
                className="mr-6 mb-6 lg:mb-0 w-16 lg:w-[100px] lg:h-9"
                src="img/logo-triad.svg"
                width={100}
                height={37}
                alt="logo"
              />
              <div className="flex ml-auto relative bottom-14 lg:mt-0 items-center gap-x-6 lg:hidden">
                {socialLinks.map(({ href, src, alt }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={25}
                      height={20}
                      className="hover:opacity-50 transition-all w-4 h-4 lg:w-6 lg:h-5"
                      src={src}
                      alt={alt}
                    />
                  </Link>
                ))}
              </div>

              <div className="flex flex-col relative bottom-5 lg:bottom-0 lg:flex-row gap-x-4 text-sm text-white gap-y-2 lg:gap-y-5">
                <span className="text-fire-gray-medium">
                  <span className="text-xl text-white/20 mr-4">•</span>TRIAD ©
                  2025. All Rights Reserved.
                </span>
                {footerLinks.map(({ text, className, href }, index) => (
                  <a href={href} key={index}>
                    <span
                      className={cn(`text-xl no-underline mr-4 ${className}`)}
                    >
                      •
                    </span>
                    <span className={cn("underline")}>{text}</span>
                  </a>
                ))}
              </div>
            </div>

            <p className="font-light border-t border-white/10 pt-5 text-fire-gray-medium text-xs">
              Participating in prediction markets involves risks and
              uncertainties that should be carefully considered. Triad does not
              have control over prediction outcomes or the assets traded, as
              they are subject to unpredictable market fluctuations. We do not
              guarantee financial returns and are not responsible for any losses
              or decisions made by users. We encourage you to review our <a className="underline" href="/terms">Terms
              of Services.</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
