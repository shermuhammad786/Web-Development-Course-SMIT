import React from 'react'
import "./featured.css"
export default function Featured() {
  return (
    <div className='featured'>
         <div className="featuredItems">
            <img className='featuredImg' src="/assets/dablin.jpeg" alt="" />
            <div className='featuredTitles'>
             <h1>Dablin</h1>
             <h2>123 Properties</h2>
            </div>
         </div>
         <div className="featuredItems">
            <img className='featuredImg' src="/assets/austin.jpeg" alt="" />
            <div className='featuredTitles'>
             <h1>Austin</h1>
             <h2>123 Properties</h2>
            </div>
         </div>
         <div className="featuredItems">
            <img className='featuredImg' src="/assets/reno.jpeg" alt="" />
            <div className='featuredTitles'>
             <h1>Reno</h1>
             <h2>123 Properties</h2>
            </div>
         </div>
    </div>
  )
}
