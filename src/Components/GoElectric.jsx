import React from "react";
import Electric from "../assets/Electric.png";
import ElectricList from "./ElectricList";

const GoElectric = () => {
  return (
    <div className="m-0 flex justify-center ">
      <div className="lg:mt-[74px] lg:mb-[110px] my-[70px] lg:mx-[0] mx-[23px]">
        <h1 className="hidden lg:flex text-[20px] font-[ClashDisplay-Variable] font-medium">
          Battery Swapping System
        </h1>

        <div className="lg:hidden font-[ClashDisplay-Variable]  font-medium flex-col gap-[16px] ">
            <p className="text-[#83BC25] lg:text-2xl lg:leading-6 text-[20px] leading-[20px]">
              Why Choose Electric Mobility
            </p>
            <h1 className="lg:text-8xl lg:text-[#050404] lg:leading-24 text-[58px] leading-[58px]">
              GO ELECTRIC
            </h1>
        </div>

        <div className="hidden lg:flex lg:w-[1064px] lg:h-[0.5px] bg-[#BDBDBD]  lg:mt-[20px]"></div>
        <div className="lg:mb-[68px] mb-[44px] mt-[50px] lg:mt-[30px]">
          <img src={Electric} alt="" />
        </div>

        

        <div className="flex flex-col gap-[40px]">

          <div className="hidden lg:flex font-[ClashDisplay-Variable]  font-medium flex-col-reverse ">
            <h1 className="lg:text-8xl lg:text-[#050404] lg:leading-24 text-[58px] leading-[58px]">
              GO ELECTRIC
            </h1>
            <p className="text-[#83BC25] lg:text-2xl lg:leading-6 text-[20px] leading-[20px]">
              Why Choose Electric Mobility
            </p>
          </div>

          <ElectricList />
        </div>
      </div>
    </div>
  );
};

export default GoElectric;
