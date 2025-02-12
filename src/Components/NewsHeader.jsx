import React from 'react'
import NewsTitle from './NewsTitle'
import NewsForm from './NewsForm'
import DesktopNews from '../assets/DesktopNews.png'
import NewsContent from './NewsContent'
import NewsSocial from './NewsSocial'

const NewsHeader = () => {
  return (
    <div className='m-0 pt-[60px] px-[23px] pb-[41px] lg:py-[56px] lg:px-[80px] bg-black lg:bg-white'>
        <div className=' lg:px-[32px] gap-[40px] flex flex-col items-center mb-[50px]'>
            <NewsTitle />
            <NewsForm />
        </div>

        <div>
            <h1 className='text-[#83BC25] text-[32px] font-normal  lg:text-5xl lg:font-medium font-[ClashDisplay-Variable] max-w-[1280px] '>Isreali Embassy, Innov8 Boost Employment,  Bolster Nigeria’s Economic Prosperity Through i-FAIR</h1>

            <div>
              <img src={DesktopNews} alt="News Image" className='w-full mt-[22px] mb-[38px]'/>
            </div>

            <div className='flex flex-col gap-[20px]'>
              <NewsContent />
              <div className='flex flex-col gap-[20px]'>

                <p className='flex items-center gap-[15px] text-[#0F0B0B] text-[14px] leading-[19px]'> 
                  Nigeria 
                  <div className='w-[1px] h-[11px] bg-[#0F0B0B]'></div> 
                  By Eniola Olakuri, a public sector analyst writes from Abuja. 
                  <div className='w-[1px] h-[11px] bg-[#0F0B0B]'></div> 
                  23 days ago 
                  <div className='w-[1px] h-[11px] bg-[#0F0B0B]'></div> 
                  0 Comments
                </p>

                <div className='flex items-center gap-[37px]'>
                  <p className='font-[ClashDisplay-Variable]'>Share Post!</p>
                  <NewsSocial />
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default NewsHeader