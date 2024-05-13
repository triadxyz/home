import Link from "next/link";
import React from "react";

const Island: React.FC = () => {
  return (
    <div className="mb-7 w-[305px] h-[29px] mx-auto px-1 bg-[#3961FB1A] rounded-full border border-[#3961FB33] flex items-center">
      <div className="bg-[#3961FB] text-white rounded-full px-2 text-sm font-medium mr-7">
        New ✨
      </div>
      <span className="text-white text-sm font-light">
        Launch on{" "}
        <Link
          className="underline pb-0.5"
          href="https://twitter.com/IslandDAOx"
          target="_blank"
          rel="noopener noreferrer"
        >
          IslandDAO
        </Link>{" "}
        🏝️
      </span>
    </div>
  );
};

export default Island;
