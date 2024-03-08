import { useState } from 'react';
import './App.css';
import First from './components/firstComponent/first';
import Second from './components/secondComponent/second';
function App() {
  const [addto, setAddto] = useState("");

  const [addtot, setAddtot] = useState([]);
  const [count, setCount] = useState({ number: 0 })
  // const arrayadd = ["me", "to", "your"]
  const addToDo = () => {
    console.log("working...")
    const newvar = [...addtot]
    newvar.push(addto)

    setAddtot(newvar)

  }
  const textt = (e) => {
    console.log(e.target.value)
    setAddto(e.target.value)
  }
  const counter = () => {
    console.log(count)
    
  }
  return (
    <>
      <div>
        <h1>Counter : {count}</h1>
        <button onClick={counter}>count</button>
        <h1>to do app</h1>

        <button onClick={addToDo}>ADD</button>
        <input type="text" required onChange={(e) => textt(e)} />
        {
          addtot?.map(single => (
            <p>
              {single}
            </p>
          ))
        }

      </div>
    </>










    // <div className="main">

    // <div className="App">
    //   <h1>this is my react page</h1>
    // </div>
    //   <First />
    //   <Second />
    // </div>
  );
}

export default App;


