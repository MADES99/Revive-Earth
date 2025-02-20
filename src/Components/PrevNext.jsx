import React from 'react'

const PrevNext = ({ prev , next}) => {
  return (
        <div className='flex gap-[42px]'>
              <button onClick={prev} className='border border-amber-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path d="M39.3755 22.5312L15.2584 22.5312L25.5943 12.1953L24.2949 10.7187L11.498 23.5156L24.2949 36.3125L25.5943 34.8359L15.2584 24.5L39.3755 24.5L39.3755 22.5312Z" fill="#FFFFFB"/>
                </svg>
              </button>

              <button onClick={next} className='border border-amber-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path d="M7.87543 22.5312L31.9926 22.5312L21.6567 12.1953L22.9561 10.7187L35.7529 23.5156L22.9561 36.3125L21.6567 34.8359L31.9926 24.5L7.87543 24.5L7.87543 22.5312Z" fill="#FFFFFB"/>
                </svg>
              </button>  
        </div>
  )
}

export default PrevNext