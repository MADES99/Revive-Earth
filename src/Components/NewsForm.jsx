import React from 'react'

const NewsForm = () => {
  return (
    <div className='flex flex-[1] w-full justify-center flex-wrap md:gap-[16px] gap-[13px]'>
              <div className='flex  flex-col gap-[8px]'>
                <div className='py-[12px] pl-[16px] pr-[14px] bg-white md:bg-[#0F0B0B] flex items-center gap-[8px] rounded-[5px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.3327 5C18.3327 4.08334 17.5827 3.33334 16.666 3.33334H3.33268C2.41602 3.33334 1.66602 4.08334 1.66602 5M18.3327 5V15C18.3327 15.9167 17.5827 16.6667 16.666 16.6667H3.33268C2.41602 16.6667 1.66602 15.9167 1.66602 15V5M18.3327 5L9.99935 10.8333L1.66602 5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <input type="text" placeholder='Enter your email' className='md:placeholder-white  placeholder-black leading-6 text-[16px] font-[inter]'/>
                </div>

                <p className='md:text-[14px] text-[11px] text-white md:text-black font-[inter] leading-[20px] font-normal'>We care about your data in our <span className=''>privacy policy</span></p>
              </div>
              
              <div className=''>
                  <button className=' py-[12px] px-[20px] font-medium font-[inter] lg:bg-[#0F0B0B] bg-[#83BC25] border-[#83BC25]  rounded-[5px] text-white'>
                    Subscribe
                  </button>
              </div>
    </div>
  )
}

export default NewsForm