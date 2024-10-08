import Image from "next/image";
import Link from "next/link";

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
  },
  {
    text: "Privacy Policy",
    className: "text-[#FFFFFF33]",
  },
];

export const Footer: React.FC = () => {
  return (
    <div className="flex w-full h-full lg:flex-col px-4 mt-[140px]">
      <div className="w-full max-w-[1330px] mx-auto">
        <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:items-center pt-10 pb-6">
          <div className="flex items-start w-full flex-col lg:flex-row lg:items-center mr-auto lg:pb-4">
            <Image
              className="mr-6 mb-6 lg:mb-0"
              src="img/logo-triad.svg"
              width={100}
              height={37}
              alt="logo"
            />
            <div className="flex ml-auto relative bottom-14 lg:mt-0 items-center gap-x-6 lg:hidden">
              {socialLinks.map(({ href, src, alt }) => (
                <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                  <Image
                    width={25}
                    height={20}
                    className="hover:opacity-50 transition-all"
                    src={src}
                    alt={alt}
                  />
                </Link>
              ))}
            </div>

            <div className="flex flex-col relative bottom-5 lg:bottom-0 lg:flex-row gap-x-4 text-sm text-white gap-y-5">
              <span className="text-fire-gray-medium">
                <span className="text-xl text-white/20 mr-4">•</span>TRIAD © 2024. All Rights Reserved.
              </span>
              {footerLinks.map(({ text, className }, index) => (
                <span key={index}>
                  <span className={`text-xl mr-4 ${className}`}>•</span>{text}
                </span>
              ))}
            </div>
          </div>

          <p className="font-light border-t border-white/10 pt-5 text-fire-gray-medium text-xs">
          The prices are derived from cryptocurrencies and various factors that drive significant volatility in the investment market. These values fluctuate with market sentiment. At Triad Finance, we provide a sophisticated approach to investing in the Solana ecosystem. We encourage you to carefully evaluate these risks and stay fully informed.
          </p>
        </div>
      </div>
    </div>
  );
};
