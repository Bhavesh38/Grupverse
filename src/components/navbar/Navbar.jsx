import React from 'react'
import NavLogo from './NavLogo'
import NavlistItems from './NavlistItems'
import NavSearchbar from './NavSearchbar'
import NavProfile from './NavProfile';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CloseOutlined } from '@mui/icons-material';
import NavbarSmallScreenView from './NavbarSmallScreenView';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = React.useState(false);
    return (
        <nav className="fixed top-0 w-full border-b-[1px] border-gray-150 bg-gray-50  shadow  p-1 pl-4  md:p-2 flex md:justify-between items-center z-[2000]">
            <NavLogo />
            <NavlistItems />
            <NavSearchbar />
            <div className='flex-grow md:hidden'>

            </div>
            <NavProfile />
            <div className='relative flex md:hidden'>
                <IconButton onClick={() => setActiveMenu(!activeMenu)}>
                    {activeMenu ? <CloseOutlined /> : <MenuIcon />}
                </IconButton>
                {
                    activeMenu && <NavbarSmallScreenView />
                }
            </div>

        </nav>
    )
}

export default Navbar
