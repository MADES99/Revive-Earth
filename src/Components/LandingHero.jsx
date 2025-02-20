import React from 'react'
import Group4 from '../assets/Group4.png'

const LandingHero = () => {
  return (
    <div className='m-0 lg:pb-[187px] lg:px-[218px] lg:pt-[231px] pb-[77px] pt-[120px] px-[23px] landing'>
            <div className='flex flex-col gap-[50px] justify-center items-center '>
                <div className='text-white flex flex-col gap-[23px] text-center'>
                    <h1 className='font-[ClashDisplay-Variable] text-6xl lg:text-8xl font-medium'>The Future is Here, Revive Earth!</h1>
                    <p className='hidden lg:flex text-[18px] font-light font-[inter] leading-[29px]'>Transforming petrol-powered tricycles/minibuses into eco-friendly electric vehicles. Plus, pioneering affordable and efficient EV manufacturing.</p>

                    <p className='lg:hidden text-[18px] font-light font-[inter] leading-[29px] text-center'>We retrofit existing gasoline tricycles/minibuses with the electric drivetrain. We also assemble/manufacture new, cheap and functional electric vehicles, and operate a convenient battery charge/swap network.</p>
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