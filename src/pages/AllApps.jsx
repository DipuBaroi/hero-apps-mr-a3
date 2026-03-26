import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';

const AllApps = () => {
    const [searchText, setSearchText] =useState('')
    
    const data = useLoaderData()
    const [apps, setApps] =useState(data)
   

    const handleSearch =(e, text) =>{
        e.preventDefault()
        if(text.length === 0) return

        const searchedApps = data.filter(app=>app.title.toLowerCase().includes(text.toLowerCase())=== true)
        setApps(searchedApps)
    }

    
    
    return (
        <div className='w-11/12 mx-auto'>
           <div className="text-center">
                <h2 className='text-4xl font-bold text-[#001931] mb-4'>Our All Applications</h2>
                <p className='text-[#627382] mb-8'>Explore All Apps on the Market developed by us. We code for Millions.</p>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='text-lg text-[#001931] font-semibold'>({apps.length}) App Found</h3>

                <form onSubmit={(e)=>{
                    handleSearch(e, searchText)
                    setSearchText('')
                }} className='relative '>
                    <input 
                    className=' w-80 border border-gray-300 rounded-lg pl-12 py-3 focus:outline-none' 
                    type="text" 
                    value={searchText}
                    onChange={e=>setSearchText(e.target.value)}
                    placeholder='Search Apps'/>
                    <CiSearch className='absolute left-4 top-1/2 -translate-y-1/2' size={25} />
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
               {
                apps.map(app=><AppCard key={app.id} app={app}/>)
               }                             
            </div>
            
        </div>
    );
};

export default AllApps;