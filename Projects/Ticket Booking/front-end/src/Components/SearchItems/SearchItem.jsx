import React from 'react'
import "./searchItem.css"
export default function SearchItem() {
    return (
        <div className='searchItem'>
            <img className='siImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500ms form Center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubTitle">Studio Apartment with Air Conditioning</span>
                <span className="siFeatures">Entire studio . 1 bathroom 21m <sub>2</sub> 1 full bed</span>
                <span className="siCancilOP">Free cancellation</span>
                <span className="siCancelOPSubtitle">You can cancel later, so in this great price today</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>0.9</button>
                </div>
                <di className="siDetailText">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </di>
            </div>
        </div>
    )
}
