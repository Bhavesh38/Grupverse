import React from 'react'
import { teamRecommendationArray } from '../../../../utils/utils'

const TeamRecommendation = () => {
    return (
        <div className='w-full'>
            <h3 className='w-full text-xl font-semibold text-center' >Recommended Team</h3 >
            <div className='flex w-full gap-2 p-1 overflow-x-auto border-gray-400 rounded-md scrollbar-hidden '>
                {
                    teamRecommendationArray.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2 justify-center text-center border-[1px] border-gray-300 min-w-[180px] p-1 px-2 rounded-2xl'>
                            <h4 className='font-semibold'>{item.teamName}</h4>
                            <img src={item.imgSrc} alt="img1" className='w-16 h-16 mx-auto rounded-full' />
                            <button type="button" className='text-gray-50 bg-[#e84949] rounded-[16px] w-fit mx-auto px-4 shadow-lg hover:bg-[#f33e3e]'>Join</button>
                        </div>
                    ))
                }

            </div>
        </div >
    )
}

export default TeamRecommendation
