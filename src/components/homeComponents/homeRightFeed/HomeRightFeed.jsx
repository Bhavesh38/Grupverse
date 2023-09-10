import React from 'react'
import TopTeam from './topTeam/TopTeam'
import TopGlobalUser from './topGlobalUser/TopGlobalUser'
import TopLocalUser from './topLocalUser/TopLocalUser'

const HomeRightFeed = () => {
    return (
        <div className=' max-h-screen overflow-y-auto z-[10] w-full md:w-1/4 flex gap-6 flex-col scrollbar-hidden'>
            <TopTeam />
            <TopGlobalUser />
            <TopLocalUser />
        </div>
    )
}

export default HomeRightFeed
