import React from 'react'
import KitsListLanding from './KitsListLanding'
import Kit2 from '../assets/Kit2.png'
import Kit3 from '../assets/Kit3.png'
import Kit1 from '../assets/Kit1.png'
import KitConverted from './KitConverted'
import kekeCon from '../assets/kekeCon.png'
import solarMobile from '../assets/solarMobile.png'
import kekeConMobile from '../assets/kekeConMobile.png'

const Conversion = () => {
  return (
    <div className='m-0 bg-[#101010] flex flex-col items-center py-[50px] px-[23px] gap-[50px] lg:gap-[0] '>

          <div className='flex flex-col gap-[17px] text-center lg:mt-[117px] lg:mb-[111px]'>
              <h2 className='lg:hidden font-[ClashDisplay-Variable] text-[20px] text-center font-medium leading-[20px] text-[#83BC25]'>Revive Earth's Eco-Friendly Fleet</h2>

            <h1 className="hidden lg:flex font-[ClashDisplay-Variable] text-[64px] lg:text-8xl text-white leading-[64px] lg:leading-24 font-medium">CONVERSION KITS</h1>

            <h1 className="lg:hidden font-[ClashDisplay-Variable] text-[64px] lg:text-8xl text-white leading-[64px] lg:leading-24 font-medium">CONVERS-ION KITS</h1>

            <p className='hidden lg:flex font-[inter] text-[18px] leading-[28px] font-light text-[#F3F8E9] lg:w-[800px]'>Revive Earth's Electrifying Innovation: Elevate Any Ride into the Future with Our Universal Conversion Kits!</p>

            <p className='lg:hidden font-[inter] text-[18px] leading-[28px] font-light text-[#F3F8E9]'>No matter your automotive business model, industry, or vertical, we have you covered. Our automotive parts solutions are flexible enough to work with the parameters of your business.</p>
          </div>

         <KitsListLanding />

         <div className='flex  lg:flex-row flex-col gap-[29px] lg:mt-[70px] lg:mb-[40px]'>
            <div className='lg:py-[49px] lg:px-[18px] bg-white'>
                <img src={Kit1} alt="Conversion Kit" className='hidden lg:flex'/>
                <img src={kekeCon} alt="keke Conversion" className='lg:hidden w-full' />
            </div>
            <div className='flex lg:flex-col flex-row gap-[20px]'>
              <img src={solarMobile} alt="solar Mobile" className='lg:hidden'/>
              <img src={kekeConMobile} alt="keke con mobile" className='lg:hidden'/>
                <img src={Kit2} alt="Conversion Kit" className='hidden lg:flex'/>
                <img src={Kit3} alt="Conversion Kit" className='hidden lg:flex'/>
            </div>
         </div>

         <KitConverted />
    </div>
  )
}

export default Conversion