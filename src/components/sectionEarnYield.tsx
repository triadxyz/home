import React from 'react'
import CardsStakeTrd from './cardsStakeTrd';

function sectionEarnYield() {
  return (
    <>
    <div className='bg-white/20 h-6 w-[139px] border-[1px] border-white/10 justify-center rounded flex items-center mb-2 mt-20'>
        <span className='text-xs font-normal text-[#ABAAA7]'>+ Boost  + Rewards</span>
    </div>

    <div className='w-full block lg:flex'>
      <div className='w-full'>
        <div className='flex items-center gap-[10px]'>
            <h1 className='text-5xl text-white'>Earn <span className='text-[#F2BE47] font-normal'>YIELD</span></h1>
            <div className='h-9 w-9 bg-white/10 flex item-center justify-cententer rounded-full'>
                <img src="" alt="" />
	        </div>
        </div>
        <span className='font-medium text-sm lg:text-base text-[#A1A7BB]'>Deposit and stake the NFT collection with Revenue Share. By staking, you will be entitled to participate in the dividends.</span>
        <div className=''>
            <CardsStakeTrd />
        </div>
      </div>

      <div className='w-full border-2 border-red-400'>
        {/* duas imagens */}
      </div>
    </div>
    </>
  )
}

export default sectionEarnYield;