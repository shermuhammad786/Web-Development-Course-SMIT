import React, { useState } from 'react'
import Profile from "../whatsonMin/Profile/Profile"
import Paper from '@mui/material/Paper';
import ThreeDots from './threeDots/ThreeDots';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { PostProfilePic } from '../whatsonMin/Profile/Profile';



export default function Post({ singlePost }) {

  const [like, setLike] = useState(0)
  const [isLikes, setIsLikes] = useState(false)


  const postLIkeHandler = () => {
    console.log(singlePost, "clicked post")
    setLike(isLikes ? like - 1 : like + 1)
    setIsLikes(!isLikes)
  }




  // console.log(singlePost, "singlepost")
  return (
    <Paper >
      <div className='mt-10 p-2 w-full'>

        {/* user Porfile */}
        <div className='flex justify-between'>
          <div className='flex items-center gap-7'>
            <PostProfilePic singlePost={singlePost} /> <h2>{singlePost.name}</h2> <span>5 min ago</span>
          </div>

          {/* post edit delet btn */}
          <ThreeDots />
        </div>

        {/* Post Description  */}
        <div className='m-6'>
          <p>{singlePost?.description}</p>
        </div>

        <div>
          <div> <img width={"100%"} src={singlePost?.profileImage} alt="" /> </div>
          <div className='flex justify-between mt-4'>
            <div className='m-4'>
              <Button onClickCapture={postLIkeHandler} variant="text"><ThumbUpIcon className={isLikes ? "text-blue" : "text-black"} /></Button>
              <span><b>{like}</b> likes</span>
            </div>
            <Button variant="text"><CommentIcon className='text-black' /></Button>

            <Button variant="text"><ShareIcon className='text-black' /></Button>
          </div>
        </div>
      </div>
    </Paper>
  )
}
