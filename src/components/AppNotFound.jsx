import React from 'react';
import appErrorImg from '../assets/App-Error.png'
import { Link } from 'react-router';

const AppNotFound = ({setApps, setNotFound, data}) => {
    return (
        <div className='text-center min-h-screen space-y-4'>
                <div className='flex justify-center pt-5'>
                    <img src={appErrorImg} alt="" />
                </div>
                <h2 className='text-4xl font-bold text-[#001931]'>OPPS!!, APP NOT FOUND</h2>
                <p className='text-[#627382]'>The app you are requesting is not found on your system. Please try another apps</p>
                {/* onClick={()=>window.location.reload()} */}
                <Link onClick={()=>{
                    setApps(data)
                    setNotFound(false)
                }} className=' btn text-white rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2]'> Go Back </Link>
            </div>
    );
};

export default AppNotFound;