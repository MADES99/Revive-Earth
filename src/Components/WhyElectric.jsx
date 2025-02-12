import React from 'react'
import WhyConsider from '../assets/WhyConsider.png' 
import WhyVehicles from './WhyVehicles'


const WhyElectric = () => {
  return (
    <div className='m-0 lg:py-[112px] flex justify-center px-[23px]'>
        <div className='flex lg:flex-row flex-col lg:gap-[109px] gap-[42px]'>
            <div className=''>
                <img src={WhyConsider} alt="Why Image" className='w-full' />
            </div>

            <div className='flex flex-col gap-[42px] items-start  w-[544px]'>
                <div className="font-[ClashDisplay-Variable]  font-medium flex flex-col-reverse gap-[12px]">
                    <h1 className="lg:text-8xl lg:text-[#050404] lg:leading-24 text-[58px] leading-[58px]">
                    VEHICLES
                    </h1>
                    <p className="text-[#83BC25] lg:text-2xl lg:leading-6 text-[20px] leading-[20px]">
                    Why Consider Electric
                    </p>
                </div>

               <WhyVehicles />
            </div>
        </div>
        
    </div>
  )
}

export default WhyElectric