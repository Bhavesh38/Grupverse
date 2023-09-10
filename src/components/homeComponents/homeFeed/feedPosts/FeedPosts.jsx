import React from 'react'
import Post from './Post'
import { feedPostsArray } from '../../../../utils/utils'

const FeedPosts = () => {
    console.log(feedPostsArray);
    return (
        <div className='w-full'>
            <h3 className='w-full text-2xl font-bold text-center' >Feed Posts</h3 >
            <div className='flex flex-col w-full gap-6 overflow-x-auto border-gray-400 rounded-md md:p-1 scrollbar-hidden'>
                {
                    feedPostsArray.map((item, index) => (
                        <Post key={index} postItem={item} />
                    ))
                }
            </div>
        </div >
    )
}

export default FeedPosts
