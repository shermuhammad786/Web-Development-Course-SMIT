import React, { useState } from 'react'
import Steps from './steps/steps'
import Count from './count/Count'
import Date from './dateFromCount/Date'
import "./counter.css"
export default function Counter() {
    const [steps, setSteps] = useState(0)
    const [count, steCount] = useState(0)
    return (
        <div className='mainContainer'>
            <h1>Counter With Progress bar</h1>
            <Steps steps={steps} setSteps={setSteps} count={count} setCount={steCount} />
            <Count count={count} setCount={steCount} />

            <Date count={count} setCount={steCount} />
        </div>
    )
}
