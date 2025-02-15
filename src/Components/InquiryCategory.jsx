import React from 'react'
import Enquiry from '../assets/Enquiry.svg'
import Glyph from '../assets/Glyph.svg'
import Car from '../assets/Car.svg'

const InquiryCategory = () => {
  return (
        <div className='font-[ClashDisplay-Variable] font-medium leading-[20px] flex flex-col lg:flex-row  gap-[24px] items-center lg:mt-[50px] lg:mb-[57px] mt-[35px] mb-[50px]'>

            <div className='h-[88px] bg-[#83BC25] flex items-center gap-[22px] text-white py-[19px] pl-[37px] pr-[62px]'>
                <img src={Enquiry} alt="Enqiry" />
                <h2 className='text-[20px]'>General Enquiry</h2>
            </div>

            <div className='h-[88px]  flex items-center gap-[22px] bg-[#F3F8E9] py-[13px] pl-[38px] pr-[23px]'>
                <img src={Glyph} alt="Enqiry" />
                <h2 className='text-[20px]'>Buy Conversion Kit</h2>
            </div>

            <div className='h-[88px]  flex items-center gap-[22px] bg-[#F3F8E9] py-[19px] pl-[57px] pr-[76px]'>
                <img src={Car} alt="Enqiry" />
                <h2 className='text-[20px]'>Buy Vehicles</h2>
            </div>

        </div>
  )
}

export default InquiryCategory