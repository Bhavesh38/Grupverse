import React from 'react'
import { storiesArray } from '../../../../utils/utils';
import { IconButton } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import TextsmsIcon from '@mui/icons-material/Textsms';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ShareIcon from '@mui/icons-material/Share';


const Post = ({ postItem }) => {
    const [liked, setLiked] = React.useState(false);
    const [likeCount, setLikeCount] = React.useState(1);
    const [disliked, setDisliked] = React.useState(false);
    const [dislikeCount, setDislikeCount] = React.useState(1);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setLiked(true);
            setLikeCount(likeCount + 1);
            if (disliked) {
                setDisliked(false);
                setDislikeCount(dislikeCount - 1);
            }
        }
    }

    const handleDislike = () => {
        if (disliked) {
            setDisliked(false);
            setDislikeCount(dislikeCount - 1);
        } else {
            setDisliked(true);
            setDislikeCount(dislikeCount + 1);
            if (liked) {
                setLiked(false);
                setLikeCount(likeCount - 1);
            }
        }
    }
    return (
        <div className='w-full rounded-xl border-[1px] border-gray-300 flex flex-col gap-3 max-w-screen'>
            <div className='flex w-full gap-6 p-1 overflow-x-auto md:p-2 scrollbar-hidden'>
                {
                    storiesArray.map((item, index) => (
                        <div key={index} className='flex flex-col items-center gap-1 text-center min-w-fit'>
                            <img src={item.imgSrc} alt="img1.png" className='w-12 h-12 border-2 border-red-500 rounded-full cursor-pointer' />
                            <span>{item.title}</span>
                        </div>
                    ))
                }
            </div>
            <div className='flex-grow border-t-[1px] border-b-[1px]'>
                <p className='p-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue posuere elementum. Maecenas egestas libero purus, at dictum tellus lobortis eu. Cras dictum sed mauris .</p>
                <img src="https://grupverse.com/api/media/image/90_1.jpeg" alt="post.png" className='object-contain' />
            </div>
            <div className='flex items-center justify-between w-full px-2 py-1 md:gap-3'>
                <div className='flex items-center gap-1'>
                    <IconButton onClick={handleLike}>
                        {liked ? <ThumbUpIcon className='text-gray-800 hover:text-gray-800' /> : <ThumbUpOutlinedIcon className='hover:text-gray-800' />}
                    </IconButton>
                    <span>{likeCount}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <IconButton onClick={handleDislike}>
                        {disliked ? <ThumbDownAltIcon className='text-gray-800 hover:text-gray-800' /> : <ThumbDownOffAltIcon className='hover:text-gray-800' />}
                    </IconButton>
                    <span>{dislikeCount}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <IconButton>
                        <TextsmsIcon className='hover:text-gray-800' />
                    </IconButton>
                    <span>1</span>
                </div>
                <div className='flex items-center gap-1'>
                    <IconButton>
                        <InsertLinkIcon className='-rotate-45 hover:text-gray-800' />
                    </IconButton>
                </div>
                <div className='flex items-center gap-1'>
                    <IconButton>
                        <ShareIcon className='hover:text-gray-800' />
                    </IconButton>
                    <span>1</span>
                </div>
            </div>
        </div>
    )
}

export default Post
