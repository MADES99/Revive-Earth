import React from 'react'
import { NavLink } from 'react-router-dom';


const ContactHero = () => {
  return (
    <div className='m-0 flex contact-page justify-center items-center lg:h-[490px] px-[23px] lg:px-[0]'>
        <div className='flex flex-col gap-[29px] justify-center items-center lg:mx-[360px] my-[114px] lg:my-[0]'>

            <div className='gap-[30px] lg:gap-[0] flex flex-col justify-center items-center'>
                <h1 className='font-[ClashDisplay-Variable] text-[64px] text-white font-semibold'>Contact Us</h1>
                <p className='font-[inter] text-[20px] text-white text-center tracking-[0.4px]'>If you're interested in ordering a Revive Earth Conversion Kit, please specify your vehicle type and any additional requirements in the message section.</p>
            </div>

            <div className='hidden lg:flex gap-[21px] justify-center items-center'>
                <button className='flex justify-center items-center text-[#454C2C] bg-[#F3F8E9] py-[12px]  w-[220px] font-semibold'>
                    Make Inquiry
                </button>

                <NavLink  to='/agent'>
                    <button className='flex justify-center items-center bg-[#1C290F] py-[12px] w-[329px] text-white font-semibold cursor-pointer'>
                        Click Here to Become an Agent
                    </button>
                </NavLink>
            </div>

        </div>
    </div>
  )
}

export default ContactHero