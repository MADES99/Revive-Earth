import React from 'react'
import ElectricVehicle from './ElectricVehicle'

const MadeInAfrica = () => {
  return (
    <div className='m-0 africa flex justify-center '>
            <div className='flex lg:flex-row  lg:gap-[44px] items-center flex-col lg:mt-[145px] lg:mb-[144px]'>
                <h1 className='lg:hidden text-[64px] font-medium font-[ClashDisplay-Variable] text-[#EDEDED]'>AFRICAN MADE</h1>

                <ElectricVehicle />

                <div className='py-[43px] px-[36px] bg-[#1C290F] flex flex-col gap-[16px] text-[#E7E7E7] max-w-[589px]'>
                    <h2 className='text-[32px]  font-[ClashDisplay-Variable]'>Electric Vehicles made for Africa, in Africa, by Africans.</h2>
                    <p className='leading-[25px]'> 
                    We're firm believers that as electric vehicles become a necessity, the demand for functional electricity will soar. This trend will extend to all aspects of our society.
                            <br />
                            <br />
                    The future of mobility lies in portable electric vehicles. They offer unparalleled convenience and cost-effectiveness, paving the way for robust electric AI cars. In fact, this path is not just preferable; it's inevitable.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default MadeInAfrica