import React from 'react'
import { VehiclesFeatures } from '../constants/Index'

const WhyVehicles = () => {
  return (
        <div className='flex flex-col gap-[40px] '>
            {
                VehiclesFeatures.map((item, i) => {
                    return      <div className='flex flex-col gap-[10px] '>
                                    <div className='flex gap-[13px] items-center'>
                                        <img src={item.img} alt="Cleaner" />
                                        <h1 className='text-[#050404] font-[ClashDisplay-Variable] text-2xl font-medium'>{item.title}</h1>
                                    </div>
                                    <p className='font-light text-[#0F0B0B] font-[inter] leading-[25px]'>{item.text}</p>
                                </div>
                })
            }
            
        </div>
  )
}

export default WhyVehicles