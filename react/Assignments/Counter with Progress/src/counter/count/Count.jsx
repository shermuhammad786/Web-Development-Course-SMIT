import React from 'react'

export default function Count({ count, setCount }) {
    const minusHandler = () => {
        setCount(count - 1)
    }
    const plusHandler = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={minusHandler}>-</button>
            <span >Count : {count}</span>
            <button onClick={plusHandler}>+</button>
        </div>
    )
}