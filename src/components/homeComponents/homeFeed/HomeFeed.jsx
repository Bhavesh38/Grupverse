import React from 'react'
import TeamRecommendation from './teamRecommendation/TeamRecommendation'

const HomeFeed = () => {
    return (
        <div className='justify-center h-screen overflow-y-auto z-[10] w-1/3'>
            <TeamRecommendation />
        </div>
    )
}

export default HomeFeed
