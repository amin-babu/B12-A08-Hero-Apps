import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import gitLogo from '../assets/git-logo.png'

const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className='w-11/12 mx-auto flex items-center justify-between'>
        <div className=" flex lg:hidden">
          <div className="dropdown flex">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink to='/' className='text-[16px] font-medium'>Home</NavLink></li>
              <li><NavLink to='' className='text-[16px] font-medium'>Apps</NavLink></li>
              <li><NavLink to='' className='text-[16px] font-medium'>Installations</NavLink></li>
            </ul>
            <Link to='/'>
              <div className='lg:hidden flex gap-2 items-center'>
                <img className='w-10' src={logo} alt="" />
                <h3 className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#632EE3] to-[#9F62F2]'>NexaHero</h3>
              </div>
            </Link>
          </div>
        </div>
        <Link to='/'>
          <div className='lg:flex hidden gap-2 items-center'>
            <img className='w-10' src={logo} alt="" />
            <h3 className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-l to-[#632EE3] from-[#9F62F2]'>NexaHero</h3>
          </div>
        </Link>
        <div className=" hidden lg:flex">
          <ul className="menu nav-menu menu-horizontal px-1">
            <li><NavLink to='/' className='text-[16px] font-medium'>Home</NavLink></li>
            <li><NavLink to='apps' className='text-[16px] font-medium'>Apps</NavLink></li>
            <li><NavLink to='installations' className='text-[16px] font-medium'>Installation</NavLink></li>
          </ul>
        </div>
        <Link to='https://github.com/amin-babu/' target='_blank' className="btn flex bg-gradient-to-l to-[#632EE3] from-[#9F62F2] text-white">
          <img src={gitLogo} alt="" />
          <p className="">Contribute</p>
        </Link>
      </div>
    </div>
  );
};

export default Navber;