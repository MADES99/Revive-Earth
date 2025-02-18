import React from 'react'
import WhyConsider from '../assets/WhyConsider.png' 
import WhyConsiderMobile from '../assets/WhyConsiderMobile.png'
import WhyVehicles from './WhyVehicles'


const WhyElectric = () => {
  return (
    <div className='m-0 lg:py-[112px] flex justify-center lg:px-[0] px-[23px] pt-[80px] pb-[100px]'>
        <div className='flex lg:flex-row flex-col lg:gap-[109px] gap-[42px]'>
                <div className="lg:hidden font-[ClashDisplay-Variable]  font-medium  flex-col-reverse gap-[12px]">
                    <p className="text-[#83BC25] lg:text-2xl lg:leading-6 text-[20px] leading-[20px]">
                    Why Consider Electric
                    </p>
                    <h1 className="lg:text-8xl lg:text-[#050404] lg:leading-24 text-[58px] leading-[58px]">
                    VEHICLES
                    </h1>
                </div>

            <div className=''>
                <img src={WhyConsider} alt="Why Image" className='w-full hidden lg:flex' />
                <img src={WhyConsiderMobile} alt="Why Image Mobile" className='lg:hidden w-full' />
            </div>

            <div className='flex flex-col gap-[42px] items-start  lg:w-[544px]'>
                <div className="hidden lg:flex font-[ClashDisplay-Variable]  font-medium  flex-col-reverse gap-[12px]">
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