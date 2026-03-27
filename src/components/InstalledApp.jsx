import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';
import { getInstalls, removeInstall } from '../utils';
import toast from 'react-hot-toast';

const InstalledApp = ({ app, setDisplayApps }) => {
    const { image,title, companyName, downloads, ratingAvg, size, id} = app
    const handleUninstall = id =>{
        removeInstall(id)
        setDisplayApps(getInstalls())
        toast.success('App Uninstalled Done')
    }
    return (
        <div className='mt-8 bg-white flex justify-between items-center p-4 mb-4 rounded-lg'>
            <div className='flex items-center gap-6'>
                <img className='w-24 h-24 ' src={image} alt="" />
                <div>
                    <h3 className='mb-4 font-medium'>{title} is owned by {companyName}</h3>
                    <div className='flex justify-between items-center space-x-6 '>
                        <div className='flex gap-2 items-center px-2 py-1 bg-[#F1F5E8] text-[#00D390]'>
                            <MdOutlineFileDownload size={25} />
                            <p>
                                {
                                    new Intl.NumberFormat('en-US', {
                                        notation: 'compact'
                                    }).format(downloads)
                                }</p>
                        </div>
                        <div className='flex gap-2 items-center px-2 py-1 bg-[#FFF0E1] text-[#FF8811]'>
                            <FaStar size={20} />
                            <p>{ratingAvg}</p>
                        </div>
                        <h3 className='text-[#627382] font-semibold'>{size} MB</h3>
                    </div>
                </div>

            </div>
            <button onClick={()=>handleUninstall(id)} className='btn text-white font-semibold bg-[#00D390]'>Uninstall</button>
        </div>
    );
};

export default InstalledApp;