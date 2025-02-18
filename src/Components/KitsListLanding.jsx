import React from 'react'
import { KitsFeatures } from '../constants/Index'
import Lightning from './Lightning'

const KitsListLanding = () => {
  return (
        <div className='flex lg:flex-row flex-col justify-center lg:items-center items-start lg:gap-[92px] gap-[35px]  w-full'>
            {
                KitsFeatures.map((item, i) => {
                    return       <div className='flex flex-col gap-[16px] w-full items-start lg:w-[293px]'>
                                        <div className='flex flex-col gap-[22px]'>
                                        <Lightning />
                                        <h2 className='font-[ClashDisplay-Variable] text-white text-2xl font-medium'>{item.title}</h2>
                                        </div>
                        
                                        <p className='text-white'>{item.text}</p>
                                    </div>
                })
            }
           
        </div>
  )
}

export default KitsListLanding