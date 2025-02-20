import React, { useState } from "react";
import { CategoryData } from "../constants/Index";

const InquiryCategory = () => {
  const [initial, setInitial] = useState(CategoryData);

  function handleClick(tool) {
    setInitial(prevInitial => {
        return (
            prevInitial.map((item, i) => {
              return  item.id === tool.id ? {...item, isCategorised : true } : {...item, isCategorised : false}
            })
        )
    })
  }

  return (
    <div className="font-[ClashDisplay-Variable] font-medium leading-[20px] flex flex-col lg:flex-row  gap-[24px] items-center lg:mt-[50px] lg:mb-[57px] mt-[35px] mb-[50px]">
      {initial.map((item, i) => {
        return (
          <div
            className="h-[88px]  flex flex-[1] items-center gap-[22px] text-white py-[19px] px-[37px]"
            style={{
              backgroundColor: item.isCategorised ? "#83BC25" : "#F3F8E9",
              color: item.isCategorised ? "white" : "black",
            }}
            onClick={() => handleClick(item)}
          >
            <img src={item.img} alt="Enqiry" />
            <h2 className="text-[20px]">{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default InquiryCategory;

// Old code for the category
{
  /* <div className='h-[88px] bg-[#83BC25] flex items-center gap-[22px] text-white py-[19px] pl-[37px] pr-[62px]'>
                <img src={Enquiry} alt="Enqiry" />
                <h2 className='text-[20px]'>General Enquiry</h2>
            </div> */
}

{
  /* <div className='h-[88px]  flex items-center gap-[22px] bg-[#F3F8E9] py-[13px] pl-[38px] pr-[23px]'>
                <img src={Glyph} alt="Enqiry" />
                <h2 className='text-[20px]'>Buy Conversion Kit</h2>
            </div>

            <div className='h-[88px]  flex items-center gap-[22px] bg-[#F3F8E9] py-[19px] pl-[57px] pr-[76px]'>
                <img src={Car} alt="Enqiry" />
                <h2 className='text-[20px]'>Buy Vehicles</h2>
            </div> */
}

// New code for the category
{
  /* <div className='h-[88px] bg-[#83BC25] flex items-center gap-[22px] text-white py-[19px] px-[37px]'>
    <img src={Enquiry} alt="Enqiry" />
    <h2 className='text-[20px]'>General Enquiry</h2>
</div> */
}
//  <div className='h-[88px]  flex items-center gap-[22px] bg-[#F3F8E9] py-[19px] px-[37px] '>
//     <img src={Glyph} alt="Enqiry" />
//     <h2 className='text-[20px]'>Buy Conversion Kit</h2>
// </div>

// <div className='h-[88px]  flex items-center gap-[22px] bg-[#F3F8E9] py-[19px] px-[37px] '>
//     <img src={Car} alt="Enqiry" />
//     <h2 className='text-[20px]'>Buy Vehicles</h2>
// </div>
