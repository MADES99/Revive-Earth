import React from 'react'
import Lightning from './Lightning'
import { Features } from '../constants/Index'
import lightning from '../assets/lightning.png'

const Rugged = () => {
  return (
        <div className='flex flex-col w-full gap-[40px] lg:w-[402px] mt-[44px] lg:mt-[0]'>
                        {
                            Features.map((item, i) => {
                            return (  
                                <div className='flex flex-[1]  flex-col gap-[10px]' key={i}>
                                    <div className='text-[Clash Display] text-2xl font-medium leading-6 flex items-center gap-[13px]'>
                                    <div className='md:w-[40px] md:h-[40px] w-[25px] h-[25px] rounded-[50%] bg-[#83BC25] flex justify-center items-center'>
                                        <img src={lightning} alt="lightning"  className='w-[25px] h-[25px]'/>
                                    </div>
                                        <h2 className='font-[ClashDisplay-Variable]'>{item.title}</h2>
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