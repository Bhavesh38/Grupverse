import React from 'react'
import { Link } from 'react-router-dom'

const NavLogo = () => {
    return (
        <div className='flex items-center justify-center gap-4'>
            <Link to="/" className='flex items-center justify-center gap-2'>
                <img src="https://grupverse.com/static/media/logo.3c685cc554a3882f4e85.png" alt="logo" className='w-10 h-10' />
                <span className='text-lg font-bold'>GroupVerse</span>
            </Link>
            <span className='hidden md:flex'>❤ 0</span>
            <p> <span className='hidden font-semibold md:flex'>Hello, Bhavesh</span></p>
        </div>
    )
}

export default NavLogo
