import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';

const AppCard = ({app}) => {
   const {image, title, downloads, ratingAvg, id} =app
    return (
       <Link to={`/appDetails/${id}`}>
             <div className='p-4 space-y-4 bg-white shadow rounded-lg '>
            <div className='flex justify-center'>
                <img className='h-72 object-cover' src={image} alt="" />
            </div>
            <h3 className='text-center'>{title}</h3>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center px-2 py-1 bg-[#F1F5E8] text-[#00D390]'>
                    <MdOutlineFileDownload size={25}/>
                    <p>
                        {
                        new Intl.NumberFormat('en-US',{
                            notation:'compact'}).format(downloads)
                        }</p>
                </div>
                <div className='flex gap-2 items-center px-2 py-1 bg-[#FFF0E1] text-[#FF8811]'>
                    <FaStar size={20}/>
                    <p>{ratingAvg}</p>
                </div>              
            </div>
        </div>
       </Link>
    );
};

export default AppCard;