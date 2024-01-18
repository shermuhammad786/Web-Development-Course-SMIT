// // import React from 'react';
// // import logo from './logo.svg';
// // import CSS from './index.css'
// // import './App.css';
// // // import { Component } from 'react';

import Heading from "./components/Check"
import About from "./components/about/about"



// // function App() {
// //   var button = document.getElementById("button");
// //   var input = document.getElementById("input");
// //   let bgc = document.getElementById("maindiv")
// //   let colorName = document.getElementById("colorName");

// //   var colorsName = ["red","green","blue","yellow"];
// //   let btn = () =>{
// //     var randomColors = Math.floor(Math.random() * colorsName.length);
// //     // console.log(colors[randomColors])
// //     bgc.style.backgroundColor = "red"; 
// //   } 
// //   return (
// //    <div id='maindiv'>
// //     <h1>background color : <span id='colorName'>color name</span> {/* <input id='input' type="text" className='input'/> */} </h1>

// //     <button onClick={btn} id='button'>Color Change</button>
// //    </div>
// //   );
// // }

// // export default App;

// // import React, { Component } from "react";
// // import First from "./components/firstComponent";
// // import Second from "./components/secondComponent";
// // import './App.css'

// // class App extends Component {
// //   constructor() {
// //     super()
// //     this.state = {

// //       name:'',
// //       RollNumber: "131593"
// //     }
// //     // this.set_Name = this.set_Name.bind(this);
// //   }


// //   set_Name = ()=> {
// //     console.log(this.state.name)
// //     let names = ["red","blue","orange","yellow","purple","black" ];
// //     let color = Math.floor(Math.random()*names.length)
// //     document.getElementById("mainDiv").style.backgroundColor = names[color]
// //     this.setState({
// //       name:names[color]
// //     })
// //   }
// //   render() {
// //     return (
// //       <div id="mainDiv">
// //         <First />
// //         <h1>This is Main Component</h1>
// //         <Second />
// //         <h2>usase of STATE</h2>
// //         <input type="text" placeholder="Enter Name" />
// //         <button onClick={this.set_Name}>Set Name</button>
// //         <h4>My name is {this.state.name}</h4>
// //       </div>
// //     )
// //   }
// // }
// // export default App;








// import React from "react";
// import CSS from "./index.css";
// class changingBgc extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       color: ""
//     }
//   }
//   changeColor = () => {
//     var colorsName = ["red", "blue", "green", "white", "orange", "purple"];
// var colorIndex = Math.floor(Math.random() * colorsName.length)
//     this.setState({
//       color: colorsName[colorIndex]
//     })
//   }
//   render() {
//     return (
//       <div style={{backgroundColor:this.state.color}} id="mainDiv">
//         <h1>background Color: {this.state.color}</h1>
//         <button id="btn" onClick={this.changeColor}>Changing Color</button>
//       </div>
//     )
//   }
// }
// export default changingBgc;















// import "./App.css"
// function App() {
//   return (
//     <div className="flex">
//       <Heading title={"Home"} />
//       <About />
//     </div>
//   )
// }
// export default App












import React, { useState } from "react"
import CSS from './App.css'
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const reset = () => {
    setCount(0)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const color = count < 0 ? 'red' : count > 0 ? 'green' : 'black'
  return (
    <div id="mainDiv">
      <h1>COUNTER</h1>
      <h1 style={{ color }}>{count}</h1>
      <div>
        <button className="btns" onClick={decrement}>Decrement</button>
        <button className="btns" onClick={reset}>Reset</button>
        <button className="btns" onClick={increment}>Increment</button>
      </div>
    </div>
  )
}
export default App;