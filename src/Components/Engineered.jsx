import React from 'react'
import Rugged from './Rugged'
import EngineeredTitle from './EngineeredTitle'
import EngineeredKeke from './EngineeredKeke'


const Engineered = () => {
  return (
    <div className='m-0 pt-[70px] pb-[113px] px-[23px] lg:py-[82px] lg:px-[163px] lg:flex justify-center items-center lg:gap-[17px] '>
        <div className='flex flex-col   lg:flex-row items-center gap-[17px] lg:pr-[34px]'>

            <div className='flex flex-col w-[382px] items-start gap-[26px] lg:w-[512px] '>
                <EngineeredTitle />
                <Rugged />
                
                <button className='w-[217px] h-[56px] py-[10] px-[17px] font-medium font-[inter] bg-[#000] text-white mt-[7px]'>
                    ORDER NOW
                </button>
            </div>

            <EngineeredKeke />


        </div>

        
    </div>
  )
}

export default Engineered