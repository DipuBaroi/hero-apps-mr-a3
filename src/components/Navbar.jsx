import React from 'react';
import contributionImg from '../assets/contribution.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-8 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink className={({isActive})=> isActive? 'text-[#632EE3] underline' : ''} to={'/'}>Home</NavLink>
                        </li>
                         <li>
                            <NavLink className={({isActive})=> isActive? 'text-[#632EE3] underline' : ''} to={'/apps'}>Apps</NavLink>
                        </li>
                         <li>
                            <NavLink className={({isActive})=> isActive? 'text-[#632EE3] underline' : ''} to={'/installation'}>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to={'./'} className="flex items-center gap-1 text-xl font-bold text-[#9F62F2]" >
                    
                    <img className='w-6 h-6' src='./logo.png' alt="" />
                    <span>HERO.IO</span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   <li>
                            <NavLink className={({isActive})=> isActive? 'text-[#632EE3] underline' : ''} to={'/'}>Home</NavLink>
                        </li>
                         <li>
                            <NavLink className={({isActive})=> isActive? 'text-[#632EE3] underline' : ''} to={'/apps'}>Apps</NavLink>
                        </li>
                         <li>
                            <NavLink className={({isActive})=> isActive? 'text-[#632EE3] underline' : ''} to={'/installation'}>Installation</NavLink>
                        </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className=' flex items-center gap-2 px-5 py-3 rounded-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                    <img src={contributionImg} alt="" />
                <a className=" text-white ">Contribution</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;