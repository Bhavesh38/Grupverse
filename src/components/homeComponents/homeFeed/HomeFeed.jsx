import React from 'react'
import TeamRecommendation from './teamRecommendation/TeamRecommendation'
import FeedPosts from './feedPosts/FeedPosts'

const HomeFeed = () => {
    return (
        <div className=' max-h-screen overflow-y-auto z-[10] w-full md:w-1/2 flex gap-6 flex-col scrollbar-hidden'>
            <TeamRecommendation />
            <FeedPosts />
        </div>
    )
}

export default HomeFeed
