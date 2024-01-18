



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This is my first page and first day on react
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




import React from "react";
// import NavBar from "./navbar/navbar.jsx";
import "./App.css"
import Homepage from "./homepage/homepage.jsx";
// import { render } from "react-dom";

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     )
//   }
// }
let name1 = "sher muhammad"
function App() {
  const name = "sher muhammad"
  return (

    <div>
      {/* <h1> <a href="./homepage/homepage.jsx">Home</a> hello <br /> {name} and {name1}
    <NavBar />
      </h1>
      <a href="google.com">Google</a> */}
      <Homepage />
    </div>
  )

}
export default App;
