import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EmailIcon from '@mui/icons-material/Email';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const profileListItems = [
    {
        id: "profile",
        name: "Profile",
        Icon: <AccountCircleIcon />,
    },
    {
        id: "messages",
        name: "Messages",
        Icon: <ChatBubbleIcon />,
    },
    {
        id: "termsAndConditions",
        name: "Terms & Conditions",
        Icon: <EmailIcon />,
    },
    {
        id: "privacyPolicy",
        name: "Privacy Policy",
        Icon: <LibraryBooksIcon />,
    },
    {
        id: "settings",
        name: "Settings",
        Icon: <SettingsIcon />,
    },
    {
        id: "logout",
        name: "Logout",
        Icon: <LogoutIcon />,
    },
]
const Profile = () => {
    return (
        <div className='absolute top-12 -right-10 md:right-0 mx-auto border-[1px] bg-gray-50 border-gray-500 rounded z-[2001] w-[200px] shadow'>
            {
                profileListItems.map((item) => (
                    <div key={item.id} className='flex items-center gap-2 p-2 font-semibold rounded cursor-pointer min-w-fit hover:bg-gray-200'>
                        {item.Icon}
                        <span className='min-w-fit'>{item.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Profile
