import React, { useState } from 'react'

export default function SplitBill({ friends, splitBillWithFriend, setSplitBillWithFriend, setFriends, setSelectFrnd, selectFrnd }) {
    const [tbill, setTbill] = useState("")
    const [ybill, setYbill] = useState("")
    const [fbill, setFbill] = useState("")
    const [payBill, setPayBill] = useState("you")

    const whoPayBill = (e) => {
        setPayBill(e);
    }
    const totalBill = (e) => {
        setTbill(e);
    }
    const yourBill = (e) => {
        setYbill(e)
    }
    const friendBill = (e) => {
        setFbill(e)
    }


    const splitBillHandler = () => {
        let pese;
        payBill === "you" ? pese = ybill - (tbill / 2) : pese = (tbill / 2) - fbill;

        if (splitBillWithFriend) {
            const updatedMoney = pese;

            setFriends(prevFriends => {
                const updatedFriends = prevFriends.map(friend => {
                    if (friend.name === splitBillWithFriend.name) {
                        return {
                            ...friend,
                            money: updatedMoney,
                        };
                    }
                    return friend;
                });

                return updatedFriends;
            });
        }
        setSelectFrnd(!selectFrnd);
    }

    return (
        <div className='splitBillDiv'>
            <div className='splitBillInnerDiv'>
                <h1 style={{ textTransform: "capitalize" }}>Split Bill With {splitBillWithFriend.name}</h1>
                <div>
                    <p>Bill Value</p>
                    <input onChange={(e) => totalBill(e.target.value)} type="text" placeholder='100' />
                </div>
                <div>
                    <p>Your Expense</p>
                    <input onChange={(e) => yourBill(e.target.value)} type="text" placeholder='100' />
                </div>
                <div>
                    <p>{splitBillWithFriend.name}'s Expense</p>
                    <input onChange={(e) => friendBill(e.target.value)} type="text" placeholder='100' />
                </div>
                <div>
                    <p>Who is paying the bill? </p>
                    <select className='selectoptions' onChange={(e) => whoPayBill(e.target.value)} name="" id="">
                        <option style={
                            {
                                height: "120px"
                            }
                        } className='options' value="you">You</option>
                        <option style={{ textTransform: "capitalize" }} value={splitBillWithFriend.name}>{splitBillWithFriend.name}</option>
                    </select>
                </div>
                <button className='btns' onClick={splitBillHandler}>Split Bill</button>
            </div>
        </div>
    )
}
