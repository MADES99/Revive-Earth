import React from 'react'
import pikasomobile from '../assets/pikasomobile.png';
import boardmobile from '../assets/boardmobile.png';
import royal from '../assets/royal.png';

const AwardMobile = () => {
  return (
          <div className='lg:hidden w-[382px] flex flex-col gap-10'>
                <img src={pikasomobile} alt="pikaso-mobile" className='w-full'/>
                <img src={boardmobile} alt="board-mobile" className='w-full'/>
                <div className='bg-white flex flex-wrap items-center gap-[34px] py-[17px] px-[33px] w-full'>
                    <img src={royal} alt="Royal Award" />
                    <div className='w-[1px] h-[81px] bg-[#83BC25]'></div>
                    <p className='text-[#1C290F] text-[20px] w-[342px] font-medium leading-[25px] font-[clash Display] text-wrap'>Engineering Award for Innovation and Sustainability</p>
                </div>
           </div>
  )
}

export default AwardMobile