import React, { useState } from 'react'

export default function AddFriend({ friends, setFriends, addNewFriend, setAddNewFriend }) {
    const [getFriendName, setGetFriendName] = useState('')
    const [getFriendImage, setGetFriendImage] = useState('')
    const gettingName = (e) => {
        setGetFriendName(e)
    };
    const gettingImage = (e) => {
        setGetFriendImage(e)
    };
    const addingNewFriens = () => {
        setAddNewFriend(!addNewFriend)
        const mereFriends = [...friends];
        mereFriends.push(
            {
                name: getFriendName,
                imageSrc: getFriendImage,
                money: 0,
            }
        )
        setFriends(mereFriends)
    }
    return (
        <div className='addFrinedDiv'>
            <div>
                <p style={{ textTransform: "capitalize" }}>Name</p>
                <input onChange={(e) => gettingName(e.target.value)} type="Enter Friend Name" />
            </div>
            <div>
                <p>Iamge</p>
                <input onChange={(e) => gettingImage(e.target.value)} type="Enter Friend Image" />
            </div>
            <button className='btns addBtn' onClick={addingNewFriens}>Add</button>
        </div>
    )
}
