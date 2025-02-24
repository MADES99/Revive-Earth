import React from 'react'
import SocialSection from './SocialSection'
import FooterLogo from './FooterLogo'
import FooterLinks from './FooterLinks'
import Subscribe from './Subscribe'

const Footer = () => {
  return (
    <div className='m-0 bg-[#2E420D] pb-[25px] pt-[65px] px-[23px]  flex justify-center  flex-col lg:pt-[70px] lg:px-[90px] lg:pb-[33px]'>
            <div className='flex mb-[84px] gap-[40px] lg:flex-row flex-col'>
               <FooterLogo />
                <FooterLinks />
                <div className='flex flex-col gap-[40px] lg:gap-[48px] items-start  lg:items-end  '>
                    <Subscribe />
                    <SocialSection />
                </div>
            </div>

            <div className='flex flex-col gap-[29px] items-center'>
                <div className='w-full bg-white h-[0.5px]'>
                </div>
                <p className='text-[#E3E3E3] text-[13px]'>All rights reserved by © Revive Earth 2023.</p>
            </div>
    </div>
  )
}

export default Footer