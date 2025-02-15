import React from 'react'
import InquiryCategory from './InquiryCategory'
import InquiryForm from './InquiryForm'


const Inquiry = () => {
  return (
    <div className='m-0 pt-[48px] pb-[47px] px-[23px] lg:pt-[95px] lg:pr-[98px] lg:pb-[65px] lg:pl-[97px] bg-[#F3F8E9]'>
        <div className='bg-white flex justify-center lg:py-[69px] py-[42px] '>

                <div className=' flex flex-col items-center'>
                <h1 className='font-[ClashDisplay-Variable] text-2xl font-medium lg:text-4xl uppercase'>Choose Inquiry Category</h1>

                <InquiryCategory />

                <InquiryForm />
                </div>

        </div>
    </div>
  )
}

export default Inquiry