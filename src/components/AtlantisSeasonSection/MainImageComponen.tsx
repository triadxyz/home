import React from 'react';
import Image from 'next/image';

const MainImageComponent: React.FC = () => (
  <div className="mb-8 md:mb-12 max-w-[1176px] mx-auto">
    <Image
      src="/img/triad-season-atlantis.webp"
      alt="Triad Season Atlantis"
      width={1176}
      height={600}
      className="w-full h-auto"
    />
  </div>
);

export default MainImageComponent;