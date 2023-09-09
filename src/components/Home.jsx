import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from './navbar/Navbar';
import HomeHeading from './homeComponents/homeHeading/HomeHeading';
import HomeFeed from './homeComponents/homeFeed/HomeFeed';
import HomeRightFeed from './homeComponents/homeRightFeed/HomeRightFeed';
const Home = () => {
    return (
        <div className=' flex justify-between w-full gap-4 p-4 z-[10] fixed top-12 right-0 bottom-0 left-0'>
            <HomeHeading />
            <HomeFeed />
            <HomeRightFeed />
        </div>
    )
}

export default Home
