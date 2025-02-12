import React from 'react'
import lightning from '../assets/lightning.png'


const KitConverted = () => {
    const convertedProducts = ['Electric Minibus', 'Electric Tricyle']
  return (
        <div className='text-white flex lg:flex-row flex-col lg:gap-[45px] gap-[15px] items-center lg:mb-[32px]'>
            <h1 className='text-[28px] font-[ClashDisplay-Variable]'>Some of the products we’ve converted:</h1>
            <div className='flex  gap-[44px]'>
                {
                    convertedProducts.map((item, i) => {
                        return  <div className='flex items-center gap-[7px]'>
                                    <div className='w-[26px] h-[26px] rounded-[50%] bg-[#83BC25] flex justify-center items-center'>
                                        <img src={lightning} alt="lightning"  className='w-[16px] h-[16px]'/>
                                    </div>
                                    <h2 className='text-[28px] font-medium font-[ClashDisplay-Variable]'>{item}</h2>
                                </div>
                    })
                }
                
            </div>
         </div>
  )
}

export default KitConverted