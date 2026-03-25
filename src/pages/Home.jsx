import React from 'react';
import Banner from '../components/Banner';
import TrendingApps from '../components/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps = useLoaderData()
    
    return (
        <div>
          <Banner/>
          <TrendingApps apps={apps}/>
        </div>
    );
};

export default Home;