import React from 'react';
import logoImg from '../../assets/logo.png'

const Loading = () => {
    return (
        <div className=' '>
            <div className='flex justify-center text-2xl font-semibold'>
                <span>L </span>
                <img className='w-6 h-6 animate-spin' src={logoImg} alt="" />  <span>A D I N G . . .</span>            
            </div>
        </div>
    );
};

export default Loading;