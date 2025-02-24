import React from 'react'
import Rugged from './Rugged'
import EngineeredTitle from './EngineeredTitle'
import EngineeredKeke from './EngineeredKeke'
import OrderButton from './OrderButton'


const Engineered = () => {
  return (
    <div className='m-0 pt-[70px] pb-[113px] px-[23px] lg:py-[82px] lg:px-[163px] lg:flex justify-center items-center lg:gap-[17px]'>
        <div className='flex flex-col   lg:flex-row items-center gap-[17px] lg:pr-[34px]'>

            <div className='flex flex-col w-[382px] items-start gap-[26px] lg:w-[512px] px-[23px]'>
                <EngineeredTitle />

                <div className="flex lg:hidden ">
                  <EngineeredKeke />
              </div>

                <Rugged />
                
                <OrderButton />
            </div>

              <div className="hidden lg:flex ">
                  <EngineeredKeke />
              </div>
        </div>        
    </div>
  )
}

export default Engineered