import React from 'react';
import { IconButton } from '@mui/material';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';

const NavSearchbar = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted');
    }
    return (
        <form onSubmit={handleFormSubmit} className='border-[1px] border-gray-600 rounded-3xl px-3 lg:flex items-center gap-2 hidden'>
            <input type="text" placeholder='Search' className='w-full px-1 outline-none rounded-l-3xl' />
            <IconButton>
                <MicNoneIcon />
            </IconButton>
            <button type="submit">
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </button>

        </form>
    )
}

export default NavSearchbar
