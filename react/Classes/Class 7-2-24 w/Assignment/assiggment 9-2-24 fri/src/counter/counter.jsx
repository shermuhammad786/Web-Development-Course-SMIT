import React, { useState } from 'react'
import Steps from './steps/steps'
import Count from './count/Count'
import Date from './dateFromCount/Date'
export default function Counter() {
    const [steps, setSteps] = useState(0)
    const [count, steCount] = useState(0)
    return (
        <div>
            <Steps steps={steps} setSteps={setSteps} />
            <Count count={count} setCount={steCount} />

            <Date count={count} setCount={steCount}/>
        </div>
    )
}
