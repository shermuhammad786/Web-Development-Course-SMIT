import React from 'react'
import "./mail.css"
export default function MailList() {
    return (
        <div className='mail'>
            <h1 className="mailTitle">Save time, eave money</h1>
            <span className='mailDesc'>Singup and we'll send the best deats to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
