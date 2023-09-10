import React from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const FeedFooter = () => {
    return (
        <div className='fixed bottom-0 w-full bg-rose-500 z-[2000] flex justify-between items-center md:px-4 py-1 text-sm'>
            <div className='flex items-center text-gray-100 cursor-pointer hover:text-gray-200'>
                <AddCircleOutlineOutlinedIcon className='hidden text-gray-100' />
                <span className=''>Create Post</span>
            </div>
            <span className='text-gray-100 cursor-pointer'>My Team</span>
            <div className='flex items-center text-gray-100 cursor-pointer hover:text-gray-200'>
                <AddCircleOutlineOutlinedIcon className='hidden text-gray-100' />
                <span className=''>Create Team</span>
            </div>
        </div>
    )
}

export default FeedFooter
