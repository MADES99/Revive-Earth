import React, { useState } from 'react'
import StorieList from './StorieList'
import PrevNext from './PrevNext'
import { StoriesKits } from "../constants/Index"




const Stories = () => {


  return (
    <div className='m-0  px-[23px] pt-[60px] pb-[47px] lg:pt-[129px] lg:pl-[75px] lg:pb-[89px] bg-[#1A1A1A]  overflow-x-hidden'>
        <div className='flex flex-col gap-[50px] items-start justify-center lg:items-start lg:gap-[57px] lg:w-[1521px] '>
            <div className='flex lg:gap-[882px]'>
                <h1 className='font-[ClashDisplay-Variable] text-white text-5xl'>Our Stories</h1>
                <div className='hidden lg:flex'>
                 <PrevNext  />
                </div>
            </div>

            <StorieList />
            <div className='flex  lg:hidden'>
                 <PrevNext />
            </div>
            
        </div>
    </div>
  )
}

export default Stories