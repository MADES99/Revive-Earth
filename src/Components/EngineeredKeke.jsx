import React from 'react'
import Frame from '../assets/Frame.png'


const EngineeredKeke = () => {
  return (
    <div className=' w-full lg:w-[512px]  relative'>
                <img src={Frame} alt="Frame" className='lg:w-[550px]' />
                <div className=' absolute w-[253px] h-[317px] rounded-br-[120px] bottom-[-18px] right-[-17px] lg:w-[253px] lg:h-[317px] bg-[#83BC25] lg:bottom-[-48px] lg:right-[-34px] lg:rounded-br-[154px] z-[-1]'></div>
    </div>
  )
}

export default EngineeredKeke