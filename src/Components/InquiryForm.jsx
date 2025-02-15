import React from 'react'
import Phone from './Phone'


const InquiryForm = () => {
    const formLabels = ['First Name *', 'Last Name']
  return (

        <form action="" className='w-full flex flex-col lg:gap-[24px] gap-[30px]'>
            <div className='flex flex-col gap-[16px]'>
                <div className='flex lg:flex-row flex-col gap-[34px]'>
                    {
                        formLabels.map((form,i) => {
                            return  <label htmlFor="" className='flex flex-col gap-[8px] text-[#111928] font-[inter] leading-6 flex-[1]'>
                                        {form}
                                        <input type="text" placeholder='Enter First Name' className='border-[1px] py-[14px] px-[20px] border-[#D1D5DB] rounded-[8px] bg-[#F3F8E9]'/>
                                    </label>
                        })
                    }
                </div>

                <div className=' flex lg:flex-row flex-col gap-[34px]'>
                    <label htmlFor="" className='flex flex-col gap-[8px] text-[#111928] font-[inter] leading-6 flex-[1]'>
                        Email*
                        <input type="email" placeholder='Enter First Name' className='border-[1px] py-[14px] px-[20px] border-[#D1D5DB] rounded-[8px] bg-[#F3F8E9]'/>
                    </label>

                    <label htmlFor="" className='flex flex-col gap-[8px] text-[#111928] font-[inter] leading-6 flex-[1]'>
                        Phone number
                        <Phone />
                    </label>
                </div>

                <div className=''>
                    <label htmlFor="" className='flex flex-col gap-[12px]'>
                        Your Message
                        <textarea name="" id="" placeholder='Your message' className='py-[13px] px-[20px] border-[1px] border-[#D1D5DB] rounded-[8px] bg-[#F3F8E9] lg:h-[254px] h-[178px] resize-none'></textarea>
                    </label>
                </div>
            </div>

            <button className='bg-[#1C290F] py-[12px] text-white font-[inter] font-semibold leading-[26px]'>Submit</button>
        </form>
  )
}

export default InquiryForm