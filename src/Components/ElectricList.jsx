import React from 'react'
import Lightning from './Lightning'
import { ElectricFeatures } from '../constants/Index'

const ElectricList = () => {
  return (
            <div className='flex lg:flex-row flex-col  lg:gap-[92px] gap-[40px]'>
            {
                ElectricFeatures.map((item, i) => {
                    return       <div className='flex flex-col gap-[16px] lg:w-[293px] items-start w-full'>
                                        <div className='flex flex-col gap-[22px]'>
                                        <Lightning />
                                        <h2 className='font-[ClashDisplay-Variable] text-[#050404] text-2xl font-medium leading-[24px]'>{item.title}</h2>
                                        </div>
                                        <p className='text-[#0F0B0B] font-light leading-[25px]'>{item.text}</p>
                                    </div>
                })
            }
        
        </div>
  )
}

export default ElectricList