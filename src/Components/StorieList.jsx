import React, { useState } from "react";


const StorieList = ({ slides, curr }) => {
 
  
  return (
    <div
      className ='text-white flex flex-row  gap-6 lg:flex-row items-center lg:gap-[83px] transition-transform ease-out duration-500'
      style={{transform : `translateX(-${curr * 300}px)`}}
    >
      {slides}
    </div>
  );
};

export default StorieList;

