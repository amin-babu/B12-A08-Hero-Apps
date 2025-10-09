import React from 'react';
import playStore from '../assets/play-store-icon.png';
import appStore from '../assets/app-store-icon.png';
import hero from '../assets/hero.png';
import { Link } from 'react-router';

const HomePageDesign = () => {
  return (
    <div>
      <div className='text-center space-y-5 mt-10 w-11/12 mx-auto'>
        <h1 className='md:text-7xl text-4xl text-[#001931] font-bold'>We Build<br /><span className='font-extrabold text-[#9F62F2]'>Productive</span> Apps</h1>
        <p className='text-[#627382]'>
          At NexaHero, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        <div className='space-x-3'>
          <Link to='https://play.google.com/store/apps' target='_blank' className='btn border h-0 px-4 py-6 border-[#D2D2D2] shadow-none'><img src={playStore} className='w-8' alt="" /> Google Play</Link>
          <Link to='https://www.apple.com/app-store/' target='_blank' className='btn border h-0 px-4 py-6 border-[#D2D2D2] shadow-none'><img src={appStore} className='w-8' alt="" /> App Store</Link>
        </div>
        <img className='mx-auto' src={hero} alt="" />
      </div>

      <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-16 text-center space-y-10'>
        <h2 className='font-bold text-5xl'>Trusted by Millions, Built for You</h2>
        <div className='flex flex-col md:flex-row items-center justify-evenly'>
          <div className='space-y-3'>
            <h5 className='font-light text-[16px]'>Total Downloads</h5>
            <h3 className='text-6xl font-extrabold'>29.6M</h3>
            <h5 className='font-light text-[16px]'>21% more than last month</h5>
          </div>
          <div className='space-y-3'>
            <h5 className='font-light text-[16px]'>Total Reviews</h5>
            <h3 className='text-6xl font-extrabold'>906K</h3>
            <h5 className='font-light text-[16px]'>46% more than last month</h5>
          </div>
          <div className='space-y-3'>
            <h5 className='font-light text-[16px]'>Active Apps</h5>
            <h3 className='text-6xl font-extrabold'>132+</h3>
            <h5 className='font-light text-[16px]'>31 more will Launch</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDesign;