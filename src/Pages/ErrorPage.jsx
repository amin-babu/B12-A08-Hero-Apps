import React from 'react';
import Navber from '../components/Navber';
import Footer from '../components/Footer';
import errImage from '../assets/error-404.png'
import { Link, useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen flex flex-col'>
      <Navber></Navber>
      <div className='flex-1 text-center space-y-8 py-12 bg-[#f5f5f5]'>
        <img className='mx-auto' src={errImage} alt="" />
        <div className='space-y-4'>
          <h3 className='font-semibold text-5xl text-[#001931]'>Oops, page not found!</h3>
          <p className='font-normal text-[#627382] text-xl'>The page you are looking for is not available.</p>
          <Link onClick={()=> navigate(-1)} className="btn px-8 py-5 bg-gradient-to-l to-[#632EE3] from-[#9F62F2] text-white">
            <p className="">Go Back!</p>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;