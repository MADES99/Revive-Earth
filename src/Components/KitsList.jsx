import React from 'react'
import { ConversionKits } from "../constants/Index";
import Division from "./Division";

const KitsList = () => {
  return (
    <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[74px] justify-center items-center">
    {
      ConversionKits.map((item, i) => {
        return (
          <>
           <div className="text-white flex flex-col  ">
              <h1 className="font-[ClashDisplay-Variable] text-8xl  font-medium leading-24">{item.title}</h1>
              <div className='w-[218px] lg:w-full'>
              <p className="mb-[12px] font-[ClashDisplay-Variable] text-2xl leading-6 font-medium">{item.text}</p>
              <p className="font-[inter] text-[14px]  leading-[14px] w-[218px]">{item.content}</p>
              </div>
          </div>
          {item.id === 3 ? null :  <Division /> }
          </>
        )
      })
    }
  </div>
  )
}

export default KitsList