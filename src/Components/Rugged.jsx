import React from 'react'
import Lightning from './Lightning'
import { Features } from '../constants/Index'

const Rugged = () => {
  return (
        <div className='flex flex-col w-full gap-[40px] lg:w-[402px]'>
                        {
                            Features.map((item, i) => {
                            return (  
                                <div className='flex flex-col gap-[10px]' key={i}>
                                    <div className='text-[Clash Display] text-2xl font-medium leading-6 flex items-center gap-[13px]'>
                                        <Lightning />
                                        <h2>{item.title}</h2>
                                    </div>
                                        <p className='text-[#0F0B0B] font-[inter] font-light leading-[25px]'>
                                            {item.text}
                                        </p>
                                </div>
                            )
                            })
                        }
        </div>
  )
}

export default Rugged