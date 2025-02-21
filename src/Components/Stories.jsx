import React, { useState } from 'react'
import StorieList from './StorieList'
import PrevNext from './PrevNext'
import { StoriesKits } from "../constants/Index"
import Read from "./Read";
import Play from "./Play";




const Stories = () => {
  const [curr, setCurr] = useState(0)

  const slides = StoriesKits.map((item, i) => {
                                return (
                                  <div className="flex flex-col justify-center items-start gap-[20px] md:flex-[1]  w-[328px]">
                                    <div className="relative w-full">
                                      <img src={item.image} alt="Innovate" className="w-full" />
                                      <Play />
                                    </div>
                                    <div className="flex flex-col gap-[20px]">
                                      <h1 className="font-[ClashDisplay-Variable] text-[18px] font-medium">
                                        {item.title}
                                      </h1>
                                      <p className="font-[inter] text-[14px] font-light">{item.text}</p>
                                    </div>
                                    <Read />
                                  </div>
                                );
                              });

    const next = () => {
     return  setCurr(curr => {
      return curr === StoriesKits.length - 1 ? 0 :  curr + 1
     })
    }

    const prev = () => {
      return  setCurr(curr => {
       return curr === 0 ? StoriesKits.length - 1  :  curr - 1
      })
     }


  return (
    <div className='m-0  px-[23px] pt-[60px] pb-[47px] lg:pt-[129px] lg:pl-[75px] lg:pb-[89px] bg-[#1A1A1A]  overflow-x-hidden'>
        <div className='flex flex-col gap-[50px] items-start justify-center lg:items-start lg:gap-[57px] lg:w-[1521px] '>
            <div className='flex lg:gap-[882px]'>
                <h1 className='font-[ClashDisplay-Variable] text-white text-5xl'>Our Stories</h1>
                <div className='hidden lg:flex'>
                 <PrevNext  next={next} prev={prev} />
                </div>
            </div>

            <StorieList  slides={slides} curr={curr}/>

            <div className='flex  lg:hidden'>
                 <PrevNext next={next} prev={prev}/>
            </div>
            
        </div>
    </div>
  )
}

export default Stories