// import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'
import Pricing from "./pricing";
import Weather from "./weather/Weather";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>
      <Weather />

      {/* Assuming you have a route configured for "/src/pricing"
      <Link to="/src/pricing">
        <Pricing>lsjglirng</Pricing>
      </Link> */}

    </>
  )
}

export default App
