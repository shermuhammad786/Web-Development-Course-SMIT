import React from 'react'
import Mind from '../../../Components/whatsonMin/Mind'
import Post from '../../../Components/Post/Post'
import { postsDummyData } from '../../../Components/dummyPost/Dummy'


export default function Center() {
    return (
        <div>
            <div>
                <Mind />
            </div>

            <div>
                {postsDummyData.map(singlePost => <Post singlePost={singlePost} />)}

            </div>

        </div>
    )
}
