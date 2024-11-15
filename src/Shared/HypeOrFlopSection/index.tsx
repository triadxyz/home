import { cn } from "@/utils/cn";
import { permanent_marker } from "@/utils/fonts";
import React from "react";

export const HypeOrFlop: React.FC = () => {
  const projects = [
    { id: 1, logo: "/svg/jupiter.svg" },
    { id: 2, logo: "/svg/drift.svg" },
    { id: 3, logo: "/svg/renans.svg" },
    { id: 4, logo: "/svg/pyth.svg" },
    { id: 5, logo: "/svg/degods.svg" },
    { id: 6, logo: "/svg/mad_lads.svg" },
    { id: 7, logo: "/svg/colosseum.svg" },
    { id: 8, logo: "/svg/ore_2.svg" },
    { id: 9, logo: "/svg/island.svg" },
    { id: 10, name: "Trade All" },
  ];

  const buttonClass = cn(
    "font-bold italic",
    permanent_marker.className,
    "bg-white/5 mb-[14px] px-3 h-6 rounded border border-white/10 backdrop-blur-xl"
  );

  const titleSpanClass = (color: string) =>
    cn("font-bold italic", permanent_marker.className, color);

  const gridItemClass = cn(
    "relative flex flex-col items-center justify-center",
    "bg-white/5 hover:bg-gray-700 border",
    "h-44 w-full md:min-w-[260px] lg:min-h-[260px] border-white/10 transition-colors"
  );

  return (
    <section className="w-full h-auto relative">
      <div
        style={{
          background:
            "radial-gradient(32.27% 32.27% at 44.35% 54.57%, #102824  10%, #13141A 100%)",
        }}
        className="absolute z-0 w-[300px] rounded-full lg:w-[100vw] -left-40 lg:-left-[500px] -top-[200px] bottom-[300px] lg:h-[1200px]"
      />

      <div
        style={{
          background:
            "radial-gradient(32.27% 32.27% at 34.35% 54.57%, #361f26  40%, #13141A 100%)",
        }}
        className="absolute z-0 w-[500px] h-[900px]  rounded-full top-[400px] lg:w-[100vw] -right-80 lg:-right-[800px] lg:-top-[200px] lg:bottom-[100px] lg:h-[1200px]"
      />

      <div className="text-white relative z-10 w-full max-w-[1300px] mx-auto">
        <div className="mb-8 px-2 xl:px-0 lg:flex block lg:justify-between items-center">
          <div>
            <button
              className={cn("flex items-center justify-center", buttonClass)}
            >
              <span className="text-gray-400 text-xs text-center">
                Trade the HYPE
              </span>
            </button>
            <h1 className="text-2xl lg:text-5xl font-semibold">
              <p>
                Will they{" "}
                <span className={titleSpanClass("text-green-500")}>HYPE</span>
              </p>
              or
              <span className={titleSpanClass("text-red-400")}>{' '}
                FLOP<span className="text-white">?</span>
              </span>
            </h1>
          </div>
          <p className="text-gray-300 text-sm lg:text-lg mt-2 max-w-md">
          Make your predictions on any event. Capture market sentiment and decide between {' '}
            <span className={titleSpanClass("text-green-500")}>HYPE</span> or{" "}
            <span className={titleSpanClass("text-red-400")}>FLOP</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 px-2 xl:px-0 md:grid-cols-3 lg:grid-cols-4 place-items-center xl:grid-cols-5 gap-0.5 m-0">
          {projects.map((project, index) => (
            <div key={project.id} className={gridItemClass}>
              <span className="absolute top-2 left-2 text-gray-500 text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.name || "Project"}
                  className="w-20 h-20 lg:w-[90px] lg:h-[90px] mt-4 mb-2"
                />
              ) : (
                <a
                  href="https://app.triadfi.co/"
                  className={cn(
                    "font-bold italic",
                    permanent_marker.className,
                    "text-center text-lg font-semibold"
                  )}
                >
                  {project.name} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HypeOrFlop;
