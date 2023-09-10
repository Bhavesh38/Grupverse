import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './navbar/Navbar';
import HomeHeading from './homeComponents/homeHeading/HomeHeading';
import HomeFeed from './homeComponents/homeFeed/HomeFeed';
import HomeRightFeed from './homeComponents/homeRightFeed/HomeRightFeed';
const Home = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between w-full gap-4 p-1 sm:p-2 md:p-4 z-[10] h-full md:fixed top-12 right-0 bottom-6 left-0'>
            <HomeHeading />
            <HomeFeed />
            <HomeRightFeed />
        </div>
    )
}

export default Home
