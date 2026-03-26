
import { Link } from 'react-router';
import AppCard from './AppCard';

const TrendingApps = ({apps}) => {
    
    
    return (
        <div className='w-11/12  mx-auto mt-10'>
            <div className="text-center">
                <h2 className='text-4xl font-bold text-[#001931] mb-4'>Trending Apps</h2>
                <p className='text-[#627382] mb-8'>Explore All Trending Apps on the Market developed by us.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
               {
                apps.slice(0, 8).map(app=><AppCard key={app.id} app={app}/>)
               }                             
            </div>
             <div className='mt-8 text-center'>
                <Link 
                to={'./allapps'}
                onClick={window.scrollTo(0,0)} 
                className=' btn text-white rounded-lg px-5 py-3 font-semibold text-base bg-linear-to-r from-[#632EE3] to-[#9F62F2]'> Show All </Link>
                
             </div>
        </div>
    );
};

export default TrendingApps;

