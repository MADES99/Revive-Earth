import React from 'react'
import MemberSocials from './MemberSocials'
import { SoftwareMembers } from '../constants/Index'

const SoftwareTeam = () => {
  return (
    <div className="flex  lg:flex-row flex-col gap-[24px] lg:gap-[14px]">
    {SoftwareMembers.map((member, i) => {
      return (
         <div className='pb-[16px] bg-white flex flex-[1] flex-col gap-[16px] border-[1px] border-[#EAECF0]'>
                          <div className='flex justify-center px-[55px] py-[15px]'>
                              <img src={member.img} alt={member.name} />
                          </div>
                          <div className='px-[16px] flex flex-col gap-[24px]'>
                              <div className='flex flex-col gap-[4px]'>
                              <h1 className='font-[ClashDisplay-Variable] text-[18px] lg:text-[20px] font-semibold leading-[30px]'>{member.name}</h1>
                              <h2 className='text-[14px] font-[inter] leading-[22px] '>Software Engineer</h2>
                              </div>

                              <MemberSocials />
                          </div>
          </div> 
      );
    })}
  </div>
  )
}

export default SoftwareTeam