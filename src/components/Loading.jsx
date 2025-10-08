import React from 'react';
import logo from '../assets/logo.png';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img
        src={logo}
        alt="Loading..."
        className="w-24 h-24 animate-spin"
      />
    </div>
  );
};

export default Loading;
