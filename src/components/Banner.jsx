import React from 'react';
import playStoreImg from '../assets/playStore.png'
import appStoreImg from '../assets/appStor.png'
import heroImg from '../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='text-center w-11/12 mx-auto' >
                <h1 className='text-[#001931] text-5xl font-bold'>We Build <br />
                    <span className="text-[#9F62F2]"> Productive</span> Apps</h1>
                <p className='text-[#627382] mt-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='my-10 flex justify-center'>
                    <div className="flex gap-5">
                        <div className='flex gap-2 btn'>
                            <img src={playStoreImg} alt="" />
                            <span>Google Play</span>
                        </div>
                        <div className='flex gap-2 btn'>
                            <img className='bg-blue-600' src={appStoreImg} alt="" />
                            <span>App Store</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-[600px] mx-auto' src={heroImg} alt="" />
                </div>
            </div>
            <div className='px-10 md:px-40 lg:px-60 py-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>
                <h2 className='text-4xl text-center font-bold mb-5'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    <div className='text-center space-y-3'>
                        <h3>Total Downloads</h3>
                        <h1 className='text-5xl  font-extrabold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-center space-y-3 mt-5 md:mt-0 lg:mt-0'>
                        <h3>Total Reviews</h3>
                        <h1 className='text-5xl  font-extrabold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-center space-y-3  mt-5 lg:mt-0'>
                        <h3>Active Apps</h3>
                        <h1 className='text-5xl  font-extrabold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;