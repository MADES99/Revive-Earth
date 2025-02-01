import React from "react";
import OrderTop from "./OrderTop";
import KitsList from "./KitsList";


const OrderSection = () => {
  return (
    <div className="m-0 pt-[70px] pb-[58px] px-[23px] lg:px-[198px] lg:py-[70px] conversion ">
      <div className="flex flex-col items-center justify-center gap-[74px]">
        <OrderTop />
        <KitsList />
      </div>
    </div>
  );
};

export default OrderSection;
