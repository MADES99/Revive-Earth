import React from 'react'
import Map from '../assets/Map.png'
import LocationPoint from '../assets/LocationPoint.png'
import MapVehicle from '../assets/MapVehicle.png'

const ElectricVehicle = () => {
  return (
        <div className='relative'>
            <img src={Map} alt="Map of Africa" />
            <div className='flex flex-col gap-[10px] items-center absolute top-[164px] left-[205px]'>
                <h2 className='font-medium font-[ClashDisplay-Variable] text-[#EDEDED]'>NIGERIA</h2>
                <img src={LocationPoint} alt="Location Point" />
            </div>
            <img src={MapVehicle} alt="Map Vehicle" className='absolute top-[256px] right-[6px]'/>
        </div>
  )
}

export default ElectricVehicle