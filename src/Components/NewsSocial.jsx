import React from 'react'
import { NewsSocials } from '../constants/Index'

const NewsSocial = () => {
  return (
           <ul className='flex items-center gap-[18px]'>
           {
            NewsSocials.map((item, i) => {
                return <li className='w-[32px] h-[32px] bg-[#0F0B0B] flex justify-center items-center rounded-[50px] p-[4px]'>
                            {item.img}
                        </li>
            })
           }
           </ul>
  )
}

export default NewsSocial