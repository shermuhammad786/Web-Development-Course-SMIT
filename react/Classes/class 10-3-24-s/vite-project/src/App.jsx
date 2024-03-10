import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import carImage from "./assets/car iamgte.jpeg"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <img src={carImage} width={"300px"} alt="" />
    </>
  )
}

export default App
