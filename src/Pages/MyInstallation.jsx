import React, { useState } from 'react';
import { loadInstalledData } from '../utils/localStorage';
import useAppDatas from '../Hooks/useAppDatas';
import Loading from '../components/Loading';
import InstallCard from '../components/InstallCard';
import { toast } from 'react-toastify';

const MyInstallation = () => {
  const [installData, setInstallData] = useState(() => loadInstalledData());
  const [sortOrder, setSortOrder] = useState('none');
  const { loading } = useAppDatas();
  if (loading) return <Loading />
  // console.log(installData);

  const sortAppsBySize = (() => {
    if (sortOrder === 'price-asc') {
      return [...installData].sort((a, b) => a.size - b.size);
    } else if (sortOrder === 'price-dsc') {
      return [...installData].sort((a, b) => b.size - a.size);
    } else {
      return installData;
    }
  })();


  const handleUnInstall = (id) => {
    const existingData = JSON.parse(localStorage.getItem('installApps'));
    const updatedData = existingData.filter(app => app.id !== id);
    setInstallData(prev => prev.filter(app => app.id !== id));
    localStorage.setItem('installApps', JSON.stringify(updatedData));
    toast('App is Uninstalled');
  };


  return (
    <div className='w-11/12 mx-auto text-center'>
      <h3 className='font-bold text-5xl mt-16 text-[#001931]'>Your Installed Apps</h3>
      <p className='font-normal text-[#627382] my-3 text-xl'>Explore All Trending Apps on the Market developed by us</p>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-semibold'>{sortAppsBySize.length ? sortAppsBySize.length : 'No'} {sortAppsBySize.length <= 1 ? 'App' : 'Apps'} Found</h2>
        <label className='form-control max-w-xs'>
          <select className='select bg-[#f5f5f5] select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="none">Sort by Size</option>
            <option value="price-asc">Low &gt; High</option>
            <option value="price-dsc">High &gt; Low</option>
          </select>
        </label>
      </div>

      <div className='space-y-3 my-7'>
        {
          sortAppsBySize.length === 0 ?
            <h2 className="col-span-full text-4xl font-bold text-[#001931]">No App Found</h2> :
            sortAppsBySize.map(installApp => <InstallCard key={installApp.id} handleUnInstall={handleUnInstall} installApp={installApp} />)
        }
      </div>
    </div>
  );
};

export default MyInstallation;