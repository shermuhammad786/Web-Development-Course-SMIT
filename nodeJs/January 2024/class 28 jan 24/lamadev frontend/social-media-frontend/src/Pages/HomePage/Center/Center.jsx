import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Mind from '../../../Components/whatsonMin/Mind'
import Post from '../../../Components/Post/Post'
import { postsDummyData } from '../../../Components/dummyPost/Dummy'
import axios from "axios"
import { SettingsCell } from '@mui/icons-material'

export default function Center({ userProfilePic }) {
    const [createPost, setCreatePost] = useState()
    // const reload = window.location.reload()
    const gettingData = useMemo(async () => {
        const response = await axios.get("http://localhost:8000/posts/get/allposts")
        console.log(response.data.allPosts, "--------->>>> dTA")
        setCreatePost(response.data.allPosts)
    }, [setCreatePost]
    )



    return (
        <div>
            <div>
                <Mind userProfilePic={userProfilePic} />
            </div>

            <div>
                {createPost?.map((singlePost, index) => <Post key={index} userProfilePic={userProfilePic} singlePost={singlePost} />)}

            </div>

        </div>
    )
}
