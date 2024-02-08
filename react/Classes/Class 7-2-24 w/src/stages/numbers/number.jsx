import React from 'react'
import "./number.css"

function Number({ level, dark }) {
    const numberArray = [1, 2, 3]
    return (
        <div className='numbers'>
            {
                numberArray.map(singleNumber => (
                    <p
                        style={{ backgroundColor: level === singleNumber ? "blue" : "purple", color: dark, border: `5px solid ${level === singleNumber ? "orange" : ""}` }}
                    >{singleNumber}</p>
                ))
            }
        </div>
    )
}

export default Number