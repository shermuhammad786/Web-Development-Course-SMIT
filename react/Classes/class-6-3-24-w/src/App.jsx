import React, { memo, useState } from 'react'
import Conter2 from './Counter2/Conter2'
import Counter1 from './Conter1/Counter1'

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0);
  const foo = () => {
    console.log(count1)
  }
foo()
  return (
    <div>
      <Counter1 setCount1={setCount1} count1={count1} />
      <Conter2 setCount2={setCount2} count2={count2}  />
    </div>
  )
}
