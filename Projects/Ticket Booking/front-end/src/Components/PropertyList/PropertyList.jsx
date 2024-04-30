import React from 'react'
import "./propertyList.css"
export default function PropertyList() {
    return (
        <div className='pList'>
            <div className="pListItems">
                <img src="/assets/hotels.jpeg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>

            <div className="pListItems">
                <img src="/assets/apartment.jpeg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>

            <div className="pListItems">
                <img src="/assets/resorts.jpeg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>

            <div className="pListItems">
                <img src="/assets/villas.jpeg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className="pListItems">
                <img src="/assets/cabins.jpeg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>

        </div>
    )
}
