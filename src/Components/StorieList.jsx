import React from "react";
import { StoriesKits } from "../constants/Index";
import Read from "./Read";
import Play from "./Play";

const StorieList = () => {
  return (
    <div
      className = 'text-white flex flex-row  gap-6 lg:flex-row items-center lg:gap-[83px] transition-transform ease-out duration-500'
    >
      {StoriesKits.map((item, i) => {
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
      })}
    </div>
  );
};

export default StorieList;

{
  /* <div className='flex flex-col justify-center items-start gap-[20px] w-[382px]  lg:w-[318px] border border-red-700'> */
}
