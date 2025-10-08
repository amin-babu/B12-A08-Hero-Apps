import React from 'react';
import useAppDatas from '../Hooks/useAppDatas';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { useParams } from 'react-router';

const AppDetails = () => {
  const {id} = useParams();
  const { appData } = useAppDatas();
  const app = appData.find(element => Number(id) === element.id);
  const {image, title, companyName, downloads, ratingAvg, size, reviews} = app || {};
  return (
    <div className='w-11/12 mx-auto'>
      <div className='mt-16 grid grid-cols-12 items-center gap-5 mb-10'>
        <div className='md:col-span-3 col-span-12'>
          <img className='w-full shadow-xl' src={image} alt="" />
        </div>
        <div className='md:col-span-9 col-span-12'>
          <h3 className='text-[#001931] font-bold text-3xl'>{title}</h3>
          <p className='pt-2 pb-4 border-b border-b-[#00193170] font-medium text-xl text-[#627382]'>Developed by <span className='font-semibold text-[#9F62F2]'>{companyName}</span></p>
          <div className='flex gap-7 mb-1 mt-3'>
            <div>
              <img src={download} alt="" />
              <p className='mt-2 text-[#001931]'>Download</p>
              <h4 className='text-[40px] font-extrabold text-[#001931]'>{downloads}</h4>
            </div>
            <div>
              <img src={rating} alt="" />
              <p className='mt-2 text-[#001931]'>Average Rating</p>
              <h4 className='text-[40px] font-extrabold text-[#001931]'>{ratingAvg}</h4>
            </div>
            <div>
              <img src={review} alt="" />
              <p className='mt-2 text-[#001931]'>Total Reviews</p>
              <h4 className='text-[40px] font-extrabold text-[#001931]'>{reviews}</h4>
            </div>
          </div>
          <button to='apps' className="btn px-5 py-5 bg-[#00D390] text-white">
            <p>Install Now ({size}MB)</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;