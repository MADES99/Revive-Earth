import React from 'react'
import Map from '../assets/Map.png'
import LocationPoint from '../assets/LocationPoint.png'
import MapVehicle from '../assets/MapVehicle.png'
import MapVehicleMobile from '../assets/MapVehicleMobile.png'

const ElectricVehicle = () => {
  return (
        <div className='relative lg:my-[0] mt-[35px] mb-[168px]'>
            <img src={Map} alt="Map of Africa" />
            <div className='flex flex-col gap-[10px] items-center absolute lg:top-[164px] llg:eft-[205px] top-[90px] left-[120px]'>
                <h2 className='font-medium font-[ClashDisplay-Variable] text-[#EDEDED]'>NIGERIA</h2>
                <img src={LocationPoint} alt="Location Point" />
            </div>
            <img src={MapVehicle} alt="Map Vehicle" className='hidden lg:flex absolute top-[256px] right-[6px]'/>
            <img src={MapVehicleMobile} alt="Map Vehicle Mobile" className='lg:hidden absolute bottom-[-87px] right-[6px]' />
        </div>
  )
}

export default ElectricVehicle