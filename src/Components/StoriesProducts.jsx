import React from 'react'
import { Products } from '../constants/Index'

const StoriesProducts = () => {
  return (
                    <div className='flex lg:flex-row flex-col gap-[48px] lg:gap-[32px]'>
                        {
                            Products.map((item, i) => {
                                return   <div className='flex flex-col gap-[32px] w-[382px] lg:w-[384px] justify-center items-center'>
                                <div className=''>
                                    <img src={item.image} alt="Keke News" />
                                </div>
    
                                <div className='flex flex-col gap-[24px]'>
                                    <div className='flex flex-col gap-[12px]'>
                                        <h2 className='text-[#83BC25] leading-[20px] font-semibold text-[14px] font-[inter]'>Reviveth • 03 Apr, 2024.</h2>
                                        <div className='flex gap-[16px] items-center'>
                                            <h1 className='text-[#101828] text-[24px] font-medium leading-[32px] font-[ClashDisplay-Variable]'>8 Ways VR Is Used For Games</h1>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                <path d="M7 17.5L17 7.5M17 7.5H7M17 7.5V17.5" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <p className='text-[#667085] leading-[24px]'>
                                            In semper, ex ornare faucibus laoreet, sem nisi varius felis, vitae dignissim sem eros a urna.
                                        </p>
                                    </div>
    
                                    <ul className='flex gap-[8px]'>
                                        <li className='py-[2px] px-[10px] bg-[#F3F8E9] text-[#83BC25] font-medium leading-[20px] font-[inter] rounded-[16px]'>Vehicles</li>
                                        <li className='py-[2px] px-[10px] bg-[#F3F8E9] text-[#51742B] font-medium leading-[20px] font-[inter] rounded-[16px]'>Electronics</li>
                                    </ul>
                                </div>
                            </div>
                            })
                        }
                        
                    </div>
  )
}

export default StoriesProducts