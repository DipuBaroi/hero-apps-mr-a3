import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';

const AppCard = ({app}) => {
   const {image, title, downloads, ratingAvg} =app
    return (
        <div className='p-4 space-y-4 bg-white shadow rounded-lg '>
            <div className='flex justify-center'>
                <img className='h-72 object-cover' src={image} alt="" />
            </div>
            <h3 className='text-center'>{title}</h3>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center px-2 py-1 bg-[#F1F5E8] text-[#00D390]'>
                    <MdOutlineFileDownload size={25}/>
                    <p>{downloads}</p>
                </div>
                <div className='flex gap-2 items-center px-2 py-1 bg-[#FFF0E1] text-[#FF8811]'>
                    <FaStar size={20}/>
                    <p>{ratingAvg}</p>
                </div>              
            </div>
        </div>
    );
};

export default AppCard;