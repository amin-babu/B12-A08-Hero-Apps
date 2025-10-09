import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'

const InstallCard = ({ installApp, handleUnInstall }) => {
  const { image, title, downloads, ratingAvg, size, id } = installApp;
  return (
    <div className="card bg-base-100 shadow rounded-md p-3 space-y-2">
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='flex flex-col md:flex-row items-center gap-3'>
          <figure className="">
            <img
              src={image}
              className="rounded-lg h-20" />
          </figure>
          <div>
            <h3 className='font-medium text-xl text-[#001931]'>{title}</h3>
            <div className='flex items-center mx-auto md:mx-0'>
              <div className="badge py-3 px-2 rounded-sm bg-transparent border-0 text-[#00D390] badge-soft badge-success">
                <img className='w-4' src={downloadIcon} alt="" /> {downloads}M
              </div>
              <div className="badge py-3 px-2 rounded-sm bg-transparent border-0 text-[#FF8811] badge-soft badge-warning">
                <img className='w-4' src={ratingIcon} alt="" /> {ratingAvg}
              </div>
              <p className='text-sm text-[#627382] ml-1.5'>{size} MB</p>
            </div>
          </div>
        </div>
        <button onClick={() => handleUnInstall(id)} className='btn border-0 bg-[#00D390] text-white'>Uninstall</button>
      </div>
    </div>
  );
};

export default InstallCard;