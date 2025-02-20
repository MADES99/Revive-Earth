import React from 'react'
import { Socials } from '../constants/Index'

const SocialSection = () => {
  return (
        <div className='flex flex-[1] flex-col  gap-[17px]'>
            <h1 className='leading-[-0.16px] text-white'>Follow RE On Social Media Or just get in touch:</h1>
            <div className='flex flex-wrap  gap-[18px]'>
                {
                    Socials.map((item, i) => {
                        return (
                            <div className='w-[32px] h-[32px] flex justify-center items-center bg-white rounded-[50px]'>
                            {item.icon}
                        </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default SocialSection