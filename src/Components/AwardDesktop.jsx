import React from 'react'
import pikaso from '../assets/pikaso.png'
import board from '../assets/board.png'
import royal from '../assets/royal.png'

const AwardDesktop = () => {
  return (
         <div className='hidden lg:flex flex-col gap-[31px] items-center'>
                <div className='flex gap-[28px]'>
                    <img src={pikaso} alt='pikaso' />
                    <img src={board} alt="hard-drives" />
                </div>

                <div className='bg-white flex flex-wrap items-center gap-[34px] py-[17px] px-[33px] '>
                    <img src={royal} alt="Royal Award" />
                    <div className='w-[1px] h-[81px] bg-[#83BC25]'></div>
                    <p className='text-[#1C290F] text-[20px] w-[342px] font-medium leading-[25px] font-[ClashDisplay-Variable] text-wrap'>Engineering Award for Innovation and Sustainability</p>
                </div>
            </div>
  )
}

export default AwardDesktop