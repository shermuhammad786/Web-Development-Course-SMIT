import React from 'react'

export default function Steps({ steps, setSteps, count, setCount }) {
    return (
        <div className='displayFlex'>
            <div className="ProgressBar" style={{ width: count }}>{count}
                <div className='setProgress'></div>
            </div>
        </div>
    )
}
