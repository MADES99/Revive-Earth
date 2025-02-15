import React from 'react'

const TeamHero = () => {
  return (
        <div className='lg:px-[52px] flex  flex-col gap-[16px] bg-white rounded-[10px] lg:h-[316px] justify-center w-full'> 
            <div className='flex flex-col gap-[4px] items-center text-center'>
                <h2 className='text-[#4D4D4D] text-[16px] font-semibold leading-[26px] font-[inter]'>OUR TEAM</h2>
                <h1 className='lg:text-[54px] text-[32px] text-[#0F0B0B] font-semibold leading-[62px] font-[ClashDisplay-Variable]'>Meet the Revive Team</h1>
            </div>

            <div className='flex justify-center'>
                <p className='text-[#4D4D4D] font-[inter] text-[20px] leading-[35px] font-light max-w-[760px] text-center'>Meet the Visionaries Driving the Future of Mobility at Revive Earth: Where Passion Meets Innovation in Every Bolt and Circuit</p>
            </div>

        </div>
  )
}

export default TeamHero