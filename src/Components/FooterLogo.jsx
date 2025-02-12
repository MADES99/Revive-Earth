import React from 'react'
import DesktopLogo from '../assets/DesktopLogo.png'


const FooterLogo = () => {
  return (
        <div className='flex flex-col gap-[30px] mr-[159px] items-start justify-start'>
            <div>
                <img src={DesktopLogo} alt="logo" className='w-[262px] h-[84px]'/>
            </div>
            <p className='text-white font-light leading-[27px] font-[inter]'>We retrofit existing gasoline tricycles/minibuses with the electric drivetrain. We also assemble/manufacture new, cheap and functional electric vehicles, and operate a convenient battery charge/swap network.</p>
        </div>
  )
}

export default FooterLogo