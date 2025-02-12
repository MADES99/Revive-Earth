import React from 'react'

const Subscribe = () => {
  return (
            <div className='flex flex-col gap-[42px]'>
                <h1 className='font-[ClashDisplay-Variable] text-white text-[20px] font-medium'>Subscribe to our newsletter</h1>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex'>
                        <input type="text" placeholder='Enter your email' className='text-white font-light  placeholder-[#E6E6E6]'/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M4.85337 13.3451L19.715 13.3451L13.3457 6.97581L14.1465 6.06592L22.0322 13.9517L14.1465 21.8375L13.3457 20.9276L19.715 14.5583L4.85337 14.5583L4.85337 13.3451Z" fill="#FFFFFB"/>
                        </svg>
                    </div>
                    <div className='w-[285px] h-[1.12px] bg-white'></div>
                </div>
            </div>
  )
}

export default Subscribe