import React from 'react'

const Pagination = () => {
    const pages = [1, 2, 3, '...', 8, 9, 10]
  return (
    <ul className='flex'>
        {
          pages.map((item, i) => {
            return  <li className='flex justify-center items-center p-[12px]  text-[14px] font-medium text-[#4D4D4D]'>          {item}
                        </li>
            })
        }
    </ul>
  )
}

export default Pagination