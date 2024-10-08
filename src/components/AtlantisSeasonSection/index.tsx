import React from "react";
import TitleComponent from "./TitleComponent";
import { TopCardComponent, topCards } from "./TopCardComponent";
import { MultiplierCardComponent, multipliersCards } from "./MultiplierCardComponent";
import MainImageComponent from "./MainImageComponen";

const AtlantisSeasonSection: React.FC = () => {
  return (
    <section className="text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <TitleComponent />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {topCards.map((card, index) => (
            <TopCardComponent key={index} {...card} />
          ))}
        </div>

        <MainImageComponent />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {multipliersCards.map((card, index) => (
            <MultiplierCardComponent key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtlantisSeasonSection;