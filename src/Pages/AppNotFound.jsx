import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import appError from '../assets/App-Error.png'
import { Link, useNavigate } from 'react-router';

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 text-center space-y-8 py-12 bg-[#f5f5f5]'>
        <img className='mx-auto' src={appError} alt="" />
        <div className='space-y-4'>
          <h3 className='font-semibold text-5xl text-[#001931]'>OPPS!! APP NOT FOUND</h3>
          <p className='font-normal text-[#627382] text-xl'>The App you are requesting is not found on our system. please try another apps</p>
          <Link onClick={() => navigate(-1)} className="btn px-8 py-5 bg-gradient-to-l to-[#632EE3] from-[#9F62F2] text-white">
            <p className="">Go Back!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;