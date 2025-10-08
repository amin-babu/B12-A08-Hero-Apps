import React from 'react';
import HomePageDesign from '../components/HomePageDesign';
import useAppDatas from '../Hooks/useAppDatas';
import AppCard from '../components/AppCard';
import { Link } from 'react-router';

const Home = () => {
  const { appData } = useAppDatas();
  const featuredApps = appData.slice(0, 8);
  console.log(appData);
  return (
    <>
      <HomePageDesign />
      <div className='mt-20 mb-10 mx-auto w-11/12 text-center space-y-5'>
        <h3 className='font-bold text-5xl text-[#001931]'>Trending Apps</h3>
        <p className='font-normal text-[#627382] text-xl'>Explore All Trending Apps on the Market developed by us</p>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-4'>
          {
            featuredApps.map(app => <AppCard key={app.id} app={app} />)
          }
        </div>
        <Link to='apps' className="btn px-8 mt-5 bg-gradient-to-l to-[#632EE3] from-[#9F62F2] text-white">
          <p className="">Show All</p>
        </Link>
      </div>
    </>
  );
};

export default Home;