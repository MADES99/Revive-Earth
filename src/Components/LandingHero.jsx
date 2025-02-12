import React from 'react'

const LandingHero = () => {
  return (
    <div className='m-0 bg-black lg:pb-[187px] lg:px-[218px] lg:pt-[231px]'>
            <div className='flex flex-col gap-[50px] justify-center items-center '>
                <div className='text-white flex flex-col gap-[23px] text-center'>
                    <h1 className='font-[ClashDisplay-Variable] text-6xl lg:text-8xl font-medium'>The Future is Here, Revive Earth!</h1>
                    <p className='text-[18px] font-light font-[inter] leading-[29px] '>Transforming petrol-powered tricycles/minibuses into eco-friendly electric vehicles. Plus, pioneering affordable and efficient EV manufacturing.</p>
                </div>

                <div className='text-white font-[inter] text-[18px] leading-[29px] flex lg:flex-row flex-col gap-[18px]'>
                    <button className='py-[24px] px-[58px] flex justify-center items-center border-[1px] border-white'>Our Products</button>
                    <button className='py-[24px] px-[76px] flex justify-center items-center bg-[#0F0B0B]'>Buy Now</button>
                </div>
            </div>
    </div>
  )
}

export default LandingHero