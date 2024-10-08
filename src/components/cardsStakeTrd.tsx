import React from 'react'

const allMultipliers = [
    {id: 1, src: "icon1.png", alt: "multiplier"},
    {id: 2, src: "icon2.png", alt: "multiplier"},
    {id: 3, src: "icon3.png", alt: "multiplier"},
    {id: 4, src: "icon4.png", alt: "multiplier"},
    {id: 5, src: "icon5.png", alt: "multiplier"},
];

function CardsStakeTrd() {
  return (
    <div className="text-white p-6 space-y-6">
      <div className="lg:flex block gap-5">
        {/* Card 1 */}
        <div className="bg-white/10 p-6 rounded-lg border-[1px] border-white/10 shadow-md lg:w-[380px] lg:h-[380px] h-[341px] w-[358px]">
          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-full p-4">
              <img src="trident-icon.png" alt="Triad Icon" className="w-8 h-8" />
            </div>
          </div>
          <div className='text-center'>
            <div className='flex items-center justify-center gap-1 mt-4 mb-5 lg:my-3'>
                <h2 className="text-2xl font-semibold">Stake Triad</h2>
                <span className="bg-[#F2BE47] text-black text-xs font-medium px-2 py-1 rounded">5.96% APR</span>
            </div>
            <p className="text-gray-400 mt-2">Stake your NFT and watch your earnings grow based on its rarity. The rarer the NFT, the higher the returns!</p>
          </div>
          <button className="bg-gray-600 text-white w-full py-2 mt-[60px] lg:mt-[69px] rounded textMarket">EARN NOW</button>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 p-6 rounded-lg border-[1px] border-white/10 shadow-md lg:w-[380px] lg:h-[380px] h-[341px] w-[358px]">
          <div className="flex justify-center">
            <div className="bg-blue-600 rounded-full p-4">
              <img src="token-icon.png" alt="TRD Icon" className="w-8 h-8" />
            </div>
          </div>
          <div className='text-center'>
            <div className='flex items-center justify-center gap-1 mt-4 mb-5 lg:my-3'>
                <h2 className="text-2xl font-semibold">Stake $TRD</h2>
                <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">11.05% APR</span>
            </div>
            <p className="text-gray-400 mt-2">Stake your $TRD and earn yield automatically. Boost your returns with Market Making and Staking Vaults.</p>
          </div>
          <button className="bg-blue-500 text-white w-full mt-[60px] lg:mt-[69px] py-2 rounded textMarket">EARN NOW</button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="lg:flex lg:justify-around block bg-white/10 p-4 rounded-lg text-center lg:w-[780px] w-[358px] lg:h-[89px]">
        <div className="space-y-1">
            <p className="text-green-400 text-2xl font-medium">$911,776.52</p>
            <p className="text-gray-400 text-xs">Value Staked ($)</p>
        </div>
        <div className="space-y-1">
          <p className="text-white text-2xl font-medium">7.5x</p>
          <p className="text-gray-400 text-xs">Max Boost</p>
        </div>
        <div className="space-y-1">
          <p className="text-white text-2xl font-medium">12,226,219.33</p>
          <p className="text-gray-400 text-xs">Total Staked ($TRD)</p>
        </div>
      </div>

      {/* Icons Row */}
      <div className="flex items-center p-4 gap-3">
        <div className="flex items-center space-x-4">
          {allMultipliers.map((multiplier) => (
            <img 
                key={multiplier.id} 
                src={multiplier.src} 
                alt={multiplier.alt} 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center" 
            />
          ))}
        </div>
        <p className="text-gray-400 text-xs">All Boost Multipliers</p>
      </div>
    </div>
  )
}

export default CardsStakeTrd;
