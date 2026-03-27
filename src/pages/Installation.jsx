import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { getInstalls } from '../utils';
import InstalledApp from '../components/InstalledApp';

const Installation = () => {
    const [displayApps, setDisplayApps] = useState([])
    const [sort, setSort]= useState('')
    useEffect(()=>{
        const savedApps = getInstalls()
        setDisplayApps(savedApps)
       
    },[])

    const handleSort = (type) =>{
        setSort(type)
        if(type==='high'){
            const sortedHighToLow =[...displayApps].sort((a,b)=>b.downloads-a.downloads)
            setDisplayApps(sortedHighToLow)
        }
         if(type==='low'){
            const sortedLowToHigh =[...displayApps].sort((a,b)=>a.downloads-b.downloads)
            setDisplayApps(sortedLowToHigh)
        }
    }
   
    return (
        <div className='w-11/12 mx-auto'>
            <div className="text-center">
                <h2 className='text-4xl font-bold text-[#001931] mb-4'>Your Installed Apps</h2>
                <p className='text-[#627382] mb-8'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex flex-col items-center  md:flex-row  md:justify-between md:items-center '>
                <h3 className='mb-5 md:mb-0 text-lg text-[#001931] font-semibold'>({displayApps.length}) App Found</h3>

                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Size <IoMdArrowDropdown size={30} /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>handleSort('high')}>High-Low</a></li>
                        <li><a onClick={()=>handleSort('low')}>Low-High</a></li>
                        
                    </ul>
                </div>
            </div>
            {
                displayApps.map(app=><InstalledApp key={app.id} app={app} setDisplayApps={setDisplayApps}/>)
            }
        </div>
    );
};

export default Installation;