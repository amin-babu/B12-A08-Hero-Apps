import React from 'react';
import logo from '../assets/logo.png';

const Loading = () => {
  return (
    <div className="flex items-center col-span-full w-full justify-center h-[50vh] bg-gray-100">
      <div className='flex items-center gap-3'>
        <span className='text-5xl font-bold'>L</span>
        <img
          src={logo}
          alt="Loading..."
          className="w-16 h-16 animate-spin"
        />
        <span className='text-5xl font-bold'>O A D I N G</span>
      </div>

    </div>
  );
};

export default Loading;
