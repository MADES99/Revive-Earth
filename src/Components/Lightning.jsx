import React from 'react'
import lightning from '../assets/lightning.png'


const Lightning = () => {
  return (
        <div className='w-[40px] h-[40px] rounded-[50%] bg-[#83BC25] flex justify-center items-center'>
            <img src={lightning} alt="lightning"  className='w-[25px] h-[25px]'/>
        </div>
  )
}

export default Lightning