import React from 'react'

export default function Steps({ steps, setSteps }) {
    const minusHandler = () => {
        setSteps(steps - 1)
    }
    const plusHandler = () => {
        setSteps(steps + 1)
    }
    return (
        <div>
            <button onClick={minusHandler}>-</button>
            <span>Steps : {steps}</span>
            <button onClick={plusHandler}>+</button>
        </div>
    )
}
