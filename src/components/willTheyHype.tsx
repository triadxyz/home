import React from 'react';
import { cn } from '@/utils/cn';
import { inter, permanent_marker } from "@/utils/fonts";

const HypeOrFlop = () => {
  const projects = [
    { id: 1, logo: '/img/juoiter.svg' },
    { id: 2, logo: 'img/drift.svg' },
    { id: 3, logo: 'img/renans.svg' },
    { id: 4, logo: 'img/pyth2.svg' },
    { id: 5, logo: 'img/degods.svg' },
    { id: 6, logo: 'img/mad_lads.svg' },
    { id: 7, logo: 'img/colosseum.svg' },
    { id: 8, logo: 'img/ore.svg'},
    { id: 9, logo: 'img/prai.svg' },
    { id: 10, name: 'Trade All' },
  ];

  return (
    <div className="text-white p-[70px]">
      <div className="mb-8 lg:flex block lg:justify-between items-center">
        <div>
            <button className={cn("font-bold italic", permanent_marker.className, "bg-white/5 mb-[14px] px-3 py-1 rounded border-[1px] border-white/10")}>
              <span className='text-gray-400 text-xs text-center'>Trade the HYPE</span>
            </button>
            <h1 className="text-5xl font-semibold">
              <p>Will they <span className={cn("font-bold italic", permanent_marker.className, "text-green-500")}> HYPE </span> </p>
                or 
              <span className={cn("font-bold italic", permanent_marker.className, "text-red-400")}> FLOP<span className='text-white'>?</span></span>
            </h1>
        </div>
        <p className="text-gray-300 mt-2 max-w-md text-base">
          Make your predictions on any Projects, NFT collections, DAOs, or Events on the web3 hype platform. Capture market sentiment and decide between <span className={cn("font-bold italic", permanent_marker.className, "text-green-500")}>HYPE</span> or <span className={cn("font-bold italic", permanent_marker.className, "text-red-400")}>FLOP</span>.
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-0 m-0">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="relative flex flex-col items-center justify-center bg-white/5 hover:bg-gray-700 border-[1px] h-44 w-44 lg:w-[260px] lg:h-[260px] border-white/10 transition-colors"
          >
            {/* Número do Projeto */}
            <span className="absolute top-2 left-2 text-gray-500 text-sm">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Logo do Projeto */}
            {project.logo ? (
              <img src={project.logo} alt={project.name} className="h-9 w-[139px] mt-4 mb-2" />
            ) : ( 
                <a href="#" className={cn("font-bold italic", permanent_marker.className, "text-center text-lg font-semibold")}>{project.name} →</a>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HypeOrFlop;
