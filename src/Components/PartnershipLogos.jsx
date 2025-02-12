import React from 'react'
import { PartnerLogos } from '../constants/Index'

const PartnershipLogos = () => {
  return (
            <div className='flex items-center gap-[78px]'>
                {
                    PartnerLogos.map((item, i) => {
                        return   <img src={item.logo} alt="logo" key={item.id}/>   
                    })
                }              
            </div>
  )
}

export default PartnershipLogos