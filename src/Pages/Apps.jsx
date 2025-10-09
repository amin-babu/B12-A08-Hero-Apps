import { useEffect, useState } from "react";
import useAppDatas from "../Hooks/useAppDatas"
import searchIcon from '../assets/search-icon.png'
import AppCard from '../components/AppCard';
import Loading from "../components/Loading";

function Apps() {
  const { appData, loading } = useAppDatas();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  
  useEffect(() => {
    if (searchLoading) {
      const timer = setTimeout(() => {
        setSearchLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [search, searchLoading]);

  if (loading) return <Loading />;
  const term = search.trim().toLowerCase();

  const searchedApps = term ?
    appData.filter(app => app.title.toLowerCase().includes(term)) : appData;

  return (
    <>
      <div className='mt-20 mb-10 mx-auto w-11/12 text-center space-y-4'>
        <h3 className='font-bold text-5xl text-[#001931]'>Our All Applications</h3>
        <p className='font-normal text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className='flex justify-between items-center mb-4'>
          <h4 className='text-2xl font-semibold'>({searchedApps.length}) Apps Found</h4>
          <label className="input bg-transparent">
            <img src={searchIcon} alt="" />
            <input onChange={(e) => {
              setSearch(e.target.value);
              setSearchLoading(true);
            }} type="search" placeholder="Search Apps" />
          </label>
        </div>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-4'>
          {
            searchLoading ? (
              <Loading />
            ) : searchedApps.length === 0 ?
              <h2 className="col-span-full text-4xl font-bold text-[#001931]">No App Found</h2> :
              searchedApps.map(app => <AppCard key={app.id} app={app} />)
          }
        </div>
      </div>
    </>
  );
}

export default Apps
