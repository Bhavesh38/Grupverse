import React from 'react'
import { IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from './Profile';

const NavProfile = () => {
    const [NotificationCount, setNotificationCount] = React.useState(2);
    const [activeProfile, setActiveProfile] = React.useState(false);
    return (
        <div className='flex items-center justify-center gap-2'>
            <IconButton className='relative'>
                <NotificationsIcon className='text-gray-900' />
                <p className='absolute px-1 text-xs text-red-100 bg-red-700 rounded-full top-1 right-1'>{NotificationCount}</p>
            </IconButton>
            <div className='relative'>
                <IconButton onClick={() => setActiveProfile(!activeProfile)}>
                    <AccountCircleIcon />
                </IconButton>
                {
                    activeProfile && <Profile />
                }
            </div>
        </div>
    )
}

export default NavProfile
