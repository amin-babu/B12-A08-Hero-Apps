import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navber></Navber>
      <div className='bg-[#f5f5f5] flex-1'>
        <div className=''>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
//
export default MainLayouts;