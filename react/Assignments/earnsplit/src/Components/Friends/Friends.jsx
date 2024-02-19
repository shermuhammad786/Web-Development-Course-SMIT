import { useState } from "react"

export default function Friends({ friends, setSelectFrnd, selectFrnd, setSplitBillWithFriend, splitBillWithFriend }) {
    const [find, setFind] = useState()
    const SelectFriend = (friendDetail) => {
        setSplitBillWithFriend(friendDetail);
        setSelectFrnd(!selectFrnd);
        setFind(friendDetail);
    }
    return (
        <div style={{ backgroundColor: "#FCF2E0", padding: "10px" }}>
            {
                friends.map((friend, friendIndex) => (
                    <div key={friendIndex} className='FriendsDiv'>
                        <div className='FriendsInnerDiv'>
                            <div className='FriendsImage'>
                                <img src={friend.imageSrc} alt="" />
                            </div>
                            <div>
                                <h3>{friend.name.toUpperCase()}</h3>
                                <p style={{ textTransform: "capitalize", color: friend.money < 0 ? "red" : friend.money > 0 ? "green" : "black" }}>{friend.money > 0 ? friend.name + " se lene hain " + Math.abs(friend.money)
                                    : friend.money === 0 ? "You and " + friend.name + " are Friends"
                                        : friend.name + " ko dene hain " + Math.abs(friend.money)}  </p>
                            </div>
                        </div>
                        <button className="btns" onClick={() => SelectFriend(friend)}>
                            {find === friend && selectFrnd === false ? "Close" : "Select"}
                        </button>
                    </div>
                ))
            }

        </div>
    )
}
