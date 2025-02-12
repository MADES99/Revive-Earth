import React from 'react'
import StoriesProducts from './StoriesProducts'
import Pagination from './Pagination'

const NewsProduct = () => {
  return (
    <div className='py-[60px] px-[23px] lg:py-[75.5px] lg:px-[80px] '>
            <div className='lg:px-[32px] flex flex-col lg:gap-[64px] gap-[45px]'>
                <div className='flex flex-col gap-[32px]'>
                    <h1 className='text-[24px] font-medium text-[#101828] leading-[32px] font-[ClashDisplay-Variable]'>
                        Related Stories
                    </h1>

                    <StoriesProducts />
                </div>

                <div className='lg:pt-[20px] lg:border-t-[1px] border-[#EAECF0] flex justify-between'>
                    <div className='flex gap-[8px] items-center font-medium text-[14px] leading-[20px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675" stroke="#4D4D4D" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Previous</p>
                    </div>

                    <Pagination />

                    <div className='flex gap-[8px] items-center font-medium text-[14px] leading-[20px]'>
                        <p>Next</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16602 10.0001H15.8327M15.8327 10.0001L9.99935 4.16675M15.8327 10.0001L9.99935 15.8334" stroke="#4D4D4D" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default NewsProduct