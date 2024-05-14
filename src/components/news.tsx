import React from "react";
import CardNew from "./card-new";

const dataNews = [
  {
    img: "img/projects-listed.png",
    title: "First Projects Listed 📘",
    description:
      "The Triad announces the first projects that will be available for trading on the platform on May 20th.",
    date: new Date(),
    link: "https://twitter.com/triadfi",
  },
  {
    img: "img/triad-islandao.png",
    title: "Triad at IslandDAO 🏝️ ",
    description:
      "Follow Triad's journey at a Solana community event in Chania, Greece. Daily content bringing important information about new features.",
    date: new Date(),
    link: "https://twitter.com/triadfi/status/1785102766118998436",
  },
];

const News: React.FC = () => {
  return (
    <div className="flex items-center flex-col">
      <h5 className="text-white font-medium text-6xl leading-[72px] mb-20 relative">
        Explore <span className="font-light text-[#A1A7BB]">what&apos;s</span>{" "}
        new 🗞️{" "}
        <img
          className="absolute -bottom-2.5 -right-6"
          src="img/icon-decoration.svg"
          alt=""
        />
      </h5>

      <div className="w-full flex justify-center gap-x-16">
        {dataNews.map((item, index) => (
          <CardNew data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default News;
