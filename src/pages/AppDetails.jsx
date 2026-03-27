import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaRegThumbsUp, FaStar, FaThumbsUp } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    const [isInstall, setIsInstall] =useState(false)
    const appData = useLoaderData()
    const { id } = useParams()

    const singleApp = appData.find(app => app.id === parseInt(id))
    
    const { image,companyName, downloads, ratingAvg,size, reviews, description, ratings } = singleApp
    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  border-b border-gray-400 pb-8'>
                <div>
                    <img className='w-90' src={image} alt="" />
                </div>
                <div className='col-span-2'>
                    <div className='border-b border-gray-400'>
                        <h2 className='text-4xl font-bold text-[#001931] mb-4'>SmPlan:ToDo List with Reminder</h2>
                        <p className='text-[#627382] mb-6'>Developed by <span className='text-[#632EE3]'>{companyName}</span></p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 mb-8 mt-4'>
                        <div className='space-y-3 flex flex-col items-center md:items-start'>
                            <MdOutlineFileDownload className='text-[#00D390]' size={30} />
                            <p>Downloads</p>
                            <h2 className='text-3xl font-bold'>{
                        new Intl.NumberFormat('en-US',{
                            notation:'compact'}).format(downloads)
                        } </h2>
                        </div>
                        <div className='space-y-3 flex flex-col items-center md:items-start'>
                            <FaStar className='text-[#FF8811]' size={30} />
                            <p>Average Rating</p>
                            <h2 className='text-3xl font-bold'>{ratingAvg}</h2>
                        </div>
                        <div className='space-y-3 flex flex-col items-center md:items-start'>
                            <FaRegThumbsUp className='text-purple-800' size={30} />
                            <p>Total Reviews</p>
                            <h2 className='text-3xl font-bold'>{
                        new Intl.NumberFormat('en-US',{
                            notation:'compact'}).format(reviews)
                        }</h2>
                        </div>
                    </div>
                   <div className="flex flex-col items-center md:items-start">
                         <button onClick={()=>{
                        setIsInstall(true)
                        toast.success('App Installed Successfully')
                    }}
                    disabled={isInstall}
                    
                    className={`btn text-white font-semibold ${isInstall ? 'bg-gray-400' : 'bg-[#00D390]' }`}>{isInstall? 'Installed' : `Install Now (${size}MB)`}</button>
                   </div>
                </div>
            </div>
            <div className='my-16 border-b border-gray-400 pb-8'>
                <h2 className='text-2xl font-bold mb-6'>Ratings</h2>
                <ResponsiveContainer height={500}>
                    <BarChart layout='vertical' width={500} height={500} data={[...ratings].reverse()}>
                        <XAxis type='number'></XAxis>
                        <YAxis dataKey='name' type='category'></YAxis>
                        <Bar dataKey='count' fill='orange'></Bar>

                    </BarChart>

                </ResponsiveContainer>
            </div>
            <div>
                <h2 className='text-2xl font-bold mb-6'>Description</h2>
                <p className='text-[#627382]'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;