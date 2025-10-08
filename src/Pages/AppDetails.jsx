import React, { useState, useEffect } from 'react';
import useAppDatas from '../Hooks/useAppDatas';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { useParams } from 'react-router';
import Recharts from '../components/Recharts';
import AppNotFound from './AppNotFound';
import Loading from '../components/Loading';

const AppDetails = () => {
  const { id } = useParams();
  const { appData, loading } = useAppDatas();
  const app = appData.find(element => Number(id) === element.id);

  const [btnText, setBtnText] = useState('');

  useEffect(() => {
    if (app) {
      const existingData = JSON.parse(localStorage.getItem('installApps')) || [];
      const isInstalled = existingData.some(a => a.id === app.id);

      if (isInstalled) {
        setBtnText('Installed');
      } else {
        setBtnText(`Install Now (${app.size}MB)`);
      }
    }
  }, [app]);

  if (loading) return <Loading />;
  if (!app) return <AppNotFound />;

  const { image, title, companyName, description, ratings, downloads, ratingAvg, reviews } = app || {};

  const handleInstall = () => {
    setBtnText('Installed');
    const existingData = JSON.parse(localStorage.getItem('installApps')) || [];
    const isDuplicate = existingData.some(a => a.id === app.id);
    if (isDuplicate) return alert('Already Installed!');

    const updatedData = [...existingData, app];
    localStorage.setItem('installApps', JSON.stringify(updatedData));
  };

  const appInfo = description || [];

  return (
    <div className='w-11/12 mx-auto'>
      <div className='mt-16 grid grid-cols-12 items-center gap-5'>
        <div className='md:col-span-3 col-span-12'>
          <img className='w-full shadow-xl' src={image} alt="" />
        </div>
        <div className='md:col-span-9 col-span-12'>
          <h3 className='text-[#001931] font-bold text-3xl'>{title}</h3>
          <p className='pt-2 pb-4 border-b border-b-[#00193170] font-medium text-xl text-[#627382]'>
            Developed by <span className='font-semibold text-[#9F62F2]'>{companyName}</span>
          </p>
          <div className='flex flex-col md:flex-row gap-7 mb-1 mt-3'>
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
          <button onClick={handleInstall} className="btn px-5 py-5 bg-[#00D390] text-white">
            {btnText}
          </button>
        </div>
      </div>

      <div className='py-5 border-y border-y-[#00193150] my-10'>
        <Recharts ratings={ratings} />
      </div>

      <div>
        <h4 className='text-2xl font-semibold text-[#001931]'>Description</h4>
        <div className='space-y-5 my-6'>
          {appInfo.map((info, index) => (
            <p key={index} className='text-xl text-justify text-[#627382] font-normal'>{info}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
