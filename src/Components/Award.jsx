import React from 'react'
import AwardDesktop from './AwardDesktop'
import AwardMobile from './AwardMobile'




const Award = () => {
  return (
    <div className='m-0 py-[84px] px-[23px] lg:py-[112px] bg-[#F4F4F4] flex justify-center'>
         <AwardDesktop />
         <AwardMobile />
    </div>
  )
}

export default Award