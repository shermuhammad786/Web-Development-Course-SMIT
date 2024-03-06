import React, { useEffect } from 'react'
import Mind from '../../../Components/whatsonMin/Mind'
import Post from '../../../Components/Post/Post'
import { postsDummyData } from '../../../Components/dummyPost/Dummy'
import axios from "axios"

export default function Center({ userProfilePic }) {
    // const reload = window.location.reload()
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("http://localhost:8000/posts/get/allposts")
            console.log(response.data.allPosts);
        }
        fetchPosts()

    }, [])
    return (
        <div>
            <div>
                <Mind userProfilePic={userProfilePic} />
            </div>

            <div>
                {postsDummyData.map(singlePost => <Post singlePost={singlePost} />)}

            </div>

        </div>
    )
}
