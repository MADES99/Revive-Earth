import React from 'react'
import InquiryForm from './InquiryForm'

const AgentInquiry = () => {
  return (
    <div className='m-0 flex justify-center items-center px-[38px] lg:px-[0]'>

        <div className='flex flex-col mt-[50px] lg:gap-[61px] lg:mb-[365px] mb-[330px] justify-center gap-[42px] max-w-[1035px] '>
            <p className='lg:text-[20px] font-[inter] leading-[30px] lg:text-center text-start font-normal'>You can register to declare interest in our highly competitive training programme focused on our conversion/retrofitting process which equips you with the relevant skills to become one of our very important change-makers. Once you're certified as an agent, we will work with you to set up a workshop and supply you with Revive Kits on-demand.</p>

            <InquiryForm />
        </div>

    </div>
  )
}

export default AgentInquiry