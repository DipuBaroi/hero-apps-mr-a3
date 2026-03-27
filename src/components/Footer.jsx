import React from 'react';
import logoImg from '../assets/logo.png'
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='px-20 py-10 bg-[#001931]'>
            <div className='flex flex-col md:flex-row justify-between items-center md:items text-white'>
                 <NavLink to={'./'} className="flex items-center gap-1 text-xl font-bold text-[#9F62F2]" >
                    
                    <img className='w-6 h-6' src={logoImg} alt="" />
                    <span>HERO.IO</span>
                </NavLink>
                <div className='mt-4 md:mt-0'>
                    <h3>Social Links</h3>
                    <div className='flex gap-2 mt-3'>
                        <FaXTwitter />
                        <CiLinkedin />
                        <FaFacebook />
                    </div>
                </div>
            </div>
            <p className="text-center mt-3 py-5 text-white border-t border-gray-100">Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;