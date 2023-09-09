import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
const listItem = [
    {
        id: "myFeed",
        title: "My Feed",
        icon: <PersonIcon />,
    },
    {
        id: "myPost",
        title: "My Post",
        icon: <PersonIcon />,
    },
    {
        id: "myTeamPost",
        title: "My Team Post",
        icon: <PersonIcon />,
    },
    {
        id: "myFollowingPost",
        title: "My Following Post",
        icon: <PersonIcon />,
    },
    {
        id: "sharedPost",
        title: "Shared Post",
        icon: <PersonIcon />,
    }
]

const HeadingListItem = () => {
    const [activeItem, setActiveItem] = React.useState("myFeed");
    return (
        <ul className='border-[1px] border-gray-400 rounded-md w-full mx-auto'>
            {
                listItem.map((item, index) => (
                    <li onClick={() => setActiveItem(item.id)} id={item.id} key={item.id} className={`flex items-center justify-between p-2 cursor-pointer hover:bg-[#de733e] ${activeItem === item.id ? "bg-[#ea773d]" : ""}  ${index === 0 && "rounded-t-md"} ${index === listItem.length - 1 && "rounded-b-md"}`}>
                        <div className='flex items-center gap-2'>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default HeadingListItem
