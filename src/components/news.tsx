import React from "react";
import CardNew from "./card-new";

const dataNews = [
  {
    img: "img/locked_value.webp",
    title: "Total Value Locked (TVL): $164,000.00 USDC  💰",
    description:
      "Our Triad Staking Platform has reached a key milestone, underscoring our commitment to enhancing user rewards.",
    date: new Date(),
    link: "https://app.triadfi.co/staking",
  },
  {
    img: "img/banner-beta.webp",
    title: "Triad: Beta Launch and More",
    description:
      "Join a cutting-edge prediction market platform. Make predictions on sports, politics, crypto trends, and global events while putting your insights to the test.",
    date: new Date(),
    link: "https://app.triadfi.co/",
  },
];

const News: React.FC = () => {
  return (
    <div className="w-full flex lg:items-center px-2 xl:px-0 flex-col mt-20">
      <h5 className="text-white font-medium text-center text-4xl md:text-6xl lg:leading-[72px] mb-10 lg:mb-20 relative">
        Explore{" "}
        <span className="font-light text-fire-gray-medium">what&apos;s</span>{" "}
        <br className="inline-block lg:hidden" />
        <span className="relative">new 🗞️ </span>
      </h5>

      <div className="w-full flex flex-col md:flex-row justify-center gap-y-8 lg:gap-y-0 gap-x-16">
        {dataNews.map((item, index) => (
          <CardNew data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default News;
