import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayouts = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navber></Navber>
      <div className='flex-1 w-11/12 mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;