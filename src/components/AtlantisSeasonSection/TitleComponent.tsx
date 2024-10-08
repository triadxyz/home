import React from 'react';
import Image from 'next/image';
import { permanent_marker } from "@/utils/fonts";

const TitleComponent: React.FC = () => (
  <div className="flex flex-col items-center relative mb-8 md:mb-12">
    <h2
      className={`${permanent_marker.className} text-center text-2xl md:text-[35px] mb-[-35px] md:mb-[-70px] relative z-10`}
    >
      TRIAD SEASON
    </h2>
    <Image
      src="/img/title-atlantis.webp"
      alt="Atlantis"
      width={500}
      height={100}
      className="mx-auto relative z-0 w-full max-w-[500px]"
    />
  </div>
);

export default TitleComponent;