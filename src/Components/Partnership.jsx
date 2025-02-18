import React from 'react'
import PartnershipLogos from './PartnershipLogos'
import PartnershipWheel from './PartnershipWheel'


const Partnership = () => {
  return (
    <div className='m-0 px-[23px] lg:px-[0]'>
            <div className=' hidden font-[inter] font-medium leading-[26px] lg:flex flex-col justify-center items-center lg:mt-[31px] lg:mb-[60px]'>
                <h2>In Partnership With</h2>
                <PartnershipLogos />
            </div>

            <PartnershipWheel />
    </div>
  )
}

export default Partnership