import React from 'react'
import HeadingListItem from './HeadingListItem'
import Trending from './Trending';
import "../../../App.css"

const HomeHeading = () => {
    return (
        <div className='flex flex-col gap-6 max-h-screen overflow-y-auto z-[10] scrollbar-hidden w-full md:w-1/4'>
            <HeadingListItem />
            <Trending />
        </div>
    )
}

export default HomeHeading
