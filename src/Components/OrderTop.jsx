import React from 'react'
import OrderButton from './OrderButton'

const OrderTop = () => {
  return (
    <div className="font-medium flex flex-col items-center justify-center gap-4 lg:w-[840px]">
          <p className="font-[ClashDisplay-Variable] text-2xl text-[#83BC25] leading-6">Saving Our World Starts Today</p>
          <h1 className="font-[ClashDisplay-Variable] text-[55px] lg:text-[90px] text-[#1B1B1B] text-center leading-[55px] lg:leading-24">ORDER CONVERSION KITS</h1>
          <OrderButton />
    </div>
  )
}

export default OrderTop