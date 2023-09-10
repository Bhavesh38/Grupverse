import { IndeterminateCheckBoxTwoTone } from '@mui/icons-material'
import React from 'react'
import { topTeamsOfTheWeekArray } from '../../../../utils/utils'

const TopTeam = () => {
    return (
        <div className='w-full'>
            <h3 className='w-full mb-4 text-xl font-bold text-center' >Top Teams of the week</h3 >
            <div className='flex w-full gap-2 p-1 overflow-y-auto border-gray-400 rounded-md scrollbar-hidden border-[1px] flex-col max-h-[250px]'>
                {
                    topTeamsOfTheWeekArray.map((item, index) => (
                        <div key={index} className='flex items-center justify-between w-full p-2 border-b-[1px]'>
                            <div className='flex items-center gap-2 '>
                                <img src={item.imgSrc} alt="img1" className='w-16 h-16 mx-auto rounded-full' />
                                <span className='font-semibold'>{item.teamName}</span>
                            </div>
                            <button type="button" className='px-2 py-1 font-semibold rounded-md hover:shadow-md bg-rose-500 text-gray-50 hover:bg-rose-600'>Join</button>
                        </div>
                    ))
                }

            </div>
        </div >
    )
}

export default TopTeam
