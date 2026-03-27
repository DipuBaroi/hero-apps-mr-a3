import React from 'react';
import { Link } from 'react-router';

const ErrorAppDetails = () => {
    return (
        <div className='text-center min-h-screen space-y-4'>
                <h3 className='text-red-700 font-bold text-5xl mb-8'>OPPS!!,</h3>
                <h2 className='text-4xl font-bold text-[#001931]'> APP NOT FOUND</h2>
                <p className='text-[#627382]'>The app you are requesting is not found on your system. Please try another apps</p>
                
                <Link to={'/'} className=' btn text-white rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2]'> Go Home </Link>
            </div>
    );
};

export default ErrorAppDetails;