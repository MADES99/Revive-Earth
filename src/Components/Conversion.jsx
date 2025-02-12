import React from 'react'
import KitsListLanding from './KitsListLanding'
import Kit2 from '../assets/Kit2.png'
import Kit3 from '../assets/Kit3.png'
import Kit1 from '../assets/Kit1.png'
import KitConverted from './KitConverted'

const Conversion = () => {
  return (
    <div className='m-0 bg-[#101010] flex flex-col items-center'>

          <div className='flex flex-col gap-[17px] text-center lg:mt-[117px] lg:mb-[111px]'>
              <h2 className='lg:hidden font-[ClashDisplay-Variable] text-[20px] text-center font-medium leading-[20px] text-[#83BC25]'>Revive Earth's Eco-Friendly Fleet</h2>
            <h1 className="font-[ClashDisplay-Variable] text-[64px] lg:text-8xl text-white leading-[64px] lg:leading-24 font-medium">CONVERSION KITS</h1>
            <p className='font-[inter] text-[18px] leading-[28px] font-light text-[#F3F8E9] lg:w-[800px]'>Revive Earth's Electrifying Innovation: Elevate Any Ride into the Future with Our Universal Conversion Kits!</p>
          </div>

         <KitsListLanding />

         <div className='flex  lg:flex-row flex-col gap-[29px] lg:mt-[70px] lg:mb-[40px]'>
            <div className='lg:py-[49px] lg:px-[18px] bg-white'>
                <img src={Kit1} alt="Conversion Kit" />
            </div>
            <div className='flex lg:flex-col flex-row gap-[20px]'>
                <img src={Kit2} alt="Conversion Kit" />
                <img src={Kit3} alt="Conversion Kit" />
            </div>
         </div>

         <KitConverted />
    </div>
  )
}

export default Conversion