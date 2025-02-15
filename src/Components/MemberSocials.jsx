import React from 'react'
import { TeamSocials } from '../constants/Index'

const MemberSocials = () => {
  return (
        <ul className='list-none flex items-center gap-[16px]'>
           {
            TeamSocials.map((social, i) => {
                return (
                    <li className='flex justify-center items-center p-[9px] h-[36px] w-[36px] rounded-[50px] bg-[#F2F4F7]'>
                        <img src={social.media} alt={social.media} />
                    </li>
                )
            })
           }
        </ul>
  )
}

export default MemberSocials

