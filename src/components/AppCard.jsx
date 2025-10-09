import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
// import appDemo from '../assets/demo-app (1).webp'
import { Link } from 'react-router';

const AppCard = ({ app }) => {
  const { title, downloads, ratingAvg, id, image } = app;
  return (
    <Link to={`/apps/${id}`}>
      <div className="card bg-base-100 shadow-md rounded-md p-3 space-y-2">
        <figure className="">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full" />
        </figure>
        <h3 className='font-medium text-[#001931]'>{title}</h3>
        <div className='flex items-center justify-between'>
          <div className="badge py-3 px-2 rounded-sm bg-[#F1F5E8] text-[#00D390] badge-soft badge-success">
            <img className='w-4' src={downloadIcon} alt="" /> {downloads}M
          </div>
          <div className="badge py-3 px-2 rounded-sm bg-[#FFF0E1] text-[#FF8811] badge-soft badge-warning">
            <img className='w-4' src={ratingIcon} alt="" /> {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;