import React from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavItems } from '../constants/Index';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [Open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <nav className='p-0  sm:py-[26px] flex justify-center bg-gradient-to-r from-black to-[#83BC25] text-white'>
        <div className='p-[23px] sm:px-14 py-[1.25rem] w-[757px] lg:border border-[#0F017A] lg:backdrop-blur-[30px]  rounded-[31px] h-[70px]  nav-container flex justify-between font-normal'>

                <ul className='hidden list-none lg:flex gap-[69px]'>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/technology'><li>Technology</li></NavLink>
                </ul>

                <div className=''>
                   <img src={logo} alt="Revive-logo" />
                </div>

                <ul className='hidden list-none lg:flex gap-[69px]'>
                    <NavLink to='/news'><li>News</li></NavLink>
                    <NavLink to='/contact'><li>Contact</li></NavLink>
                </ul>

                <div className='lg:hidden'>
                  <button onClick={handleMenu}>
                    {Open ? <X /> : <Menu />}
                  </button>
                </div>
        </div>

        {
          Open && (
            <div className='fixed right-0 z-[-1] bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
              <ul>
                 {
                  NavItems.map((item, i) => {
                    return <NavLink to={item.to}><li key={item.id} className='py-1'>{item.label}</li></NavLink>
                  })
                 }
              </ul>
            </div>
          )
        }
    </nav>
  )
}

export default Navbar