import React from 'react'
import OrderButton from './OrderButton'
import WorkersBg from '../assets/WorkersBg.png'
import WorkingPartners from '../assets/WorkingPartners.png'
import lightning from '../assets/lightning.png'
import WorkingPartnersMobile from '../assets/WorkingPartnersMobile.png'

const PartnershipWheel = () => {
  return (
            <div className='flex md:flex-row flex-col  justify-center  gap-[39px] lg:mb-[14px] mt-[70px] mb-[107px] lg:mt-[0]'>
                <div className='flex flex-col gap-[40px] md:w-[512px]'>
                    <div className='flex flex-col lg:gap-[20px] gap-[25px]'>
                        <div className='font-[ClashDisplay-Variable]  font-medium flex flex-col-reverse'>
                            <h1 className='text-[#29292B] text-[60px] leading-16  md:text-[64px] '>BUILDING THE FUTURE</h1>
                            <p className='text-[#83BC25] text-[20px] md:text-2xl '>Innovation on Wheels</p>
                        </div>

                        <p className='font-[inter] font-light leading-[25px] md:w-[437px]'>Transform Your Ride - Retrofit your existing petrol-powered vehicle into a sleek, eco-friendly electric machine with our cutting-edge revive kits. Say goodbye to emissions and hello to a cleaner, greener commute.</p>
                    </div>

                    <div className='hidden lg:flex'>
                        <OrderButton />
                    </div>
                </div>

                <div className='hidden lg:flex relative partners h-[572px] w-[642px]'>
                        <img src={WorkingPartners} alt="Working Partners" className='absolute top-0 left-[-63px]'/>
                        <div className='w-[80px] h-[80px] rounded-[50%] bg-[#83BC25] flex justify-center items-center absolute left-[48px] top-[-40px]'>
                            <img src={lightning} alt="lightning"  className='w-[49px] h-[49px]'/>
                        </div>
                </div>

                <div className='lg:hidden flex flex-col gap-[50px] partners relative'>
                        <div>
                            <img src={WorkingPartnersMobile} alt="Working Partners Mobile"  />
                        </div>
                        <OrderButton />                        
                </div>
                
            </div>
  )
}

export default PartnershipWheel