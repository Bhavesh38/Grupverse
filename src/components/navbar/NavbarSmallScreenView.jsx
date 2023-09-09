import React from 'react'
import { navbarlistItems } from '../../utils/utils'

const NavbarSmallScreenView = () => {
    const [activeItem, setActiveItem] = React.useState("")
    return (
        <div className='absolute top-12 right-0 border-[1px] border-gray-500 rounded z-[2002] w-[130px] shadow bg-gray-100'>
            <ul className='flex flex-col justify-center'>
                {navbarlistItems.map((item) => (
                    <li id={item.id} key={item.id} className={`inline-block mx-3 font-semibold ${activeItem === item.id ? "text-gray-900" : "text-gray-600"} text-lg hover:text-gray-800`} >
                        <a onClick={() => setActiveItem(item.id)} href={`#${item.id}`} >{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarSmallScreenView
