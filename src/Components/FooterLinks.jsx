import React from 'react'
import { Links } from '../constants/Index'
import { CompanyLinks } from '../constants/Index'
import { NavLink } from 'react-router-dom'

const FooterLinks = () => {
  return (
                <div className='flex flex-[1] gap-[60px] mr-[175px] lg:w-[900px]'>
                    <div className='flex flex-col gap-[40px]'>
                        <h1 className='font-[ClashDisplay-Variable] text-white text-[18px] font-semibold'>Links</h1>
                        <ul className='flex flex-col list-none  font-[inter] text-white gap-[35px]'>
                            {
                                Links.map((item, i) => {
                                    return   <li>{item.link}</li>
                                })
                            }
                           
                        </ul>
                    </div>

                    <div className='flex flex-col gap-[40px]'>
                        <h1 className='font-[ClashDisplay-Variable] text-white text-[18px] font-semibold'>Company</h1>
                        <ul className='flex flex-col list-none text-[18px] font-[inter] text-white gap-[35px]'>

                            {
                                CompanyLinks.map((item, i) => {
                                 return   item.id === 1 ? <NavLink to='/team'><li>{item.company}</li></NavLink> : <li>{item.company}</li>
    
                                })
                            }
                        </ul>
                    </div>
                </div>
  )
}

export default FooterLinks