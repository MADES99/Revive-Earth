import React from 'react'
import contactkeke from '../assets/contactkeke.jpg'
import ContactForm from './ContactForm'
import ContactTop from './ContactTop'

const Contact = () => {
  return (
    <div className='m-0 py-[60px] px-[23px] lg:pt-[78px] lg:pb-[50px] lg:px-[135px] bg-[#F3F8E9]'>
            <div className='flex flex-col-reverse lg:flex-row gap-[50px] justify-center'>
                <div className='flex flex-col pt-[27px] pb-[74px] px-[15px] lg:py-[34px] lg:px-[50px] gap-[45px] bg-white rounded-[10px] lg:w-[646px]'>

                   <ContactTop />

                   <ContactForm />
                </div>

                <div className=''>
                    <img src={contactkeke} alt="Contact Keke" className=''/>
                </div>
            </div>
    </div>
  )
}

export default Contact