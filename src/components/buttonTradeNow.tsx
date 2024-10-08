import Link from 'next/link';
import React from 'react';

const BetaLaunchButton = () => {
  return (
    <Link 
      href="https://app.triadfi.co/"
      target="_blank"
      rel="noopener noreferrer" 
    >
      <button className="relative bg-[#3961FB] hover:bg-[#3961FB]/80 text-white text-base font-semibold w-[170px] h-[44px] lg:w-[200px] lg:h-[50px] rounded transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 pulse-animation">
        <span>TRADE NOW</span>
      </button>
    </Link>
  );
};

export default BetaLaunchButton;
