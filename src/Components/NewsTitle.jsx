import React from 'react'

const NewsTitle = () => {
  return (
    <div className='flex flex-col items-center gap-[24px]'>
            <div className='flex flex-col items-center gap-[12px]'>
              <h2 className='text-[#83BC25] text-[16px] font-semibold leading-6 font-[inter]'>Our Blog</h2>
              <h1 className='font-[ClashDisplay-Variable] text-[#0F0B0B] text-5xl leading-[60px] font-medium'>Our Stories</h1>
            </div>
            <p className='text-[20px] leading-[30px] text-[#0F0B0B] text-center lg:zw-[768px] px-[10px] font-[inter]'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
    </div>
  )
}

export default NewsTitle