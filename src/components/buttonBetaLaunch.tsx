import Link from 'next/link';
import React from 'react';

const BetaLaunchButton = () => {
  return (
    <Link 
      href="https://app.triadfi.co/"
      target="_blank"
      rel="noopener noreferrer" 
    >
      <button className="flex items-center justify-between gap-6 bg-[#292A31] text-white py-1 pl-4 pr-1 rounded-md hover:bg-[#24242c] transition duration-300 ease-in-out">
        <div className='text-start'>
          <p className='inter text-base font-medium'>BETA Launch</p>
          <p className='font-light text-sm'>Prediction of hype or flop in Web3</p>
        </div>
        <div className='flex justify-center items-center bg-[#131419] h-14 w-16 rounded-md'>
          <svg
            className="w-5 h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="1 0 15 15"
          >
            <path d="M12.293 9H4a1 1 0 0 1 0-2h8.293L9.707 4.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L12.293 9z" />
          </svg>
        </div>
      </button>
    </Link>
  );
};

export default BetaLaunchButton;
