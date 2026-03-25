import React from 'react';
import errorImg from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center min-h-screen space-y-4'>
                <div className='flex justify-center pt-5'>
                    <img src={errorImg} alt="" />
                </div>
                <h2 className='text-4xl font-bold text-[#001931]'>Oops, page not found!</h2>
                <p className='text-[#627382]'>The page you are looking for is not available.</p>
                
                <Link to={'./'} className=' btn text-white rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2]'> Go Back </Link>
            </div>
        </div>
    );
};

export default ErrorPage;