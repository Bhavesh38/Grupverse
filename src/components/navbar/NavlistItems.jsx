import React from 'react'
import { navbarlistItems } from '../../utils/utils'


const NavlistItems = () => {
    const [activeItem, setActiveItem] = React.useState("")
    return (
        <ul className='justify-center hidden md:flex'>
            {navbarlistItems.map((item) => (
                <li id={item.id} key={item.id} className={`inline-block mx-3 font-semibold ${activeItem === item.id ? "text-gray-900" : "text-gray-600"} text-lg hover:text-gray-800`} >
                    <a onClick={() => setActiveItem(item.id)} href={`#${item.id}`} >{item.name}</a>
                </li>
            ))}
        </ul>
    )
}

export default NavlistItems
