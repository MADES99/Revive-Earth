import React from 'react'
import { ContactPlaceholder } from '../constants/Index'

const ContactForm = () => {
  return (
            <div className='flex flex-col gap-[30px] '>
                <form action="" className='flex flex-col gap-[25px] text-[#0F0B0B]'>
                    {
                        ContactPlaceholder.map((item, i) => {
                            return (
                                <input type="text"  placeholder={item.text} className='border font-[inter] text-[14px] px-[14px] py-[20px] placeholder-[#0F0B0B] rounded-[5px] border-[#0F0B0B] focus:border-[#1C290F]'/>
                            )
                        })
                    }
                    <textarea name="Message" id="Message"  placeholder="Message" className='border border-[#0F0B0B] placeholder-[#0F0B0B] py-[16px] px-[20px] rounded-[5px]'></textarea>
                </form>

                <button className='bg-[#1C290F] flex justify-center items-center py-[12px] text-white font-semibold leading-[26px]'>
                    Submit
                </button>
            </div>
  )
}

export default ContactForm