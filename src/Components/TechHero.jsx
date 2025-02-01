import React from 'react'
import techkeke from '../assets/techkeke.png'
import { TechItems } from '../constants/Index'
import mobilekeke from '../assets/mobilekeke.png'

const TechHero = () => {
  return (
    <div className='m-0 py-[70px] px-[23px]  lg:p-[0]  lg:pr-32'>
        <div className='flex items-center gap-[71px]'>
            <div className='hidden lg:block'>
                <img src={techkeke} alt="Tricycle" />
            </div>

            <div className=' w-full lg:flex lg:py-[0] flex-col lg:w-[512px] lg:gap-[37px] flex-wrap'>
                <div className='flex  flex-col gap-[23px]'>
                    <h1 className='text-[53px]  leading-[58px] text-[#1C290F] lg:text-7xl font-medium lg:leading-[72px] font-[ClashDisplay-Variable]'>Re-Defining Mobility for Sustainability</h1>

                    <div className='lg:hidden mb-[17px]'>
                         <img src={mobilekeke} alt="Mobile Tricycle" className='w-full'/>
                    </div>

                    <p className='text-[16px] text-[#1C290F)] lg:text-[18px] font-[inter] font-light leading-[28.8px]'>The Revive Kit is our flagship solution designed to transform traditional petrol vehicles into efficient electric vehicles (EVs). By integrating cutting-edge electric drive trains, our Revive Kits breathe new life into your existing vehicles, offering a sustainable and cost-effective alternative to purchasing a brand-new EV.</p>
                </div>

                <div className='flex gap-[23px] lg:gap-[41px]'>
                    {
                        TechItems.map((item, i) => {
                            return (
                                <div className='w-[256px] gap-[9px] ' key={i}>
                                    <div className='flex justify-start items-center gap-[13px] '>
                                        <img src={item.image} alt="fuel" className='h-[45px] w-[45px] lg:h-[56px] lg:w-[56px]'/>
                                        <p className='text-[50px] text-[#83BC25] lg:text-[64px] font-[ClashDisplay-Variable] font-medium'>{item.text}</p>
                                    </div>

                                    <p className='text-[#1C290F] text-[18px]'>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechHero