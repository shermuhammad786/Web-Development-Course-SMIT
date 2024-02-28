// import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'
import Pricing from "./pricing";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>

      {/* Assuming you have a route configured for "/src/pricing" */}
      <Link to="/src/pricing">
        <Pricing>lsjglirng</Pricing>
      </Link>

    </>
  )
}

export default App
