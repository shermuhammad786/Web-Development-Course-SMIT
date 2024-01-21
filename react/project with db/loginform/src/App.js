// // App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import "./App.css"
import Home from './component/home';

const App = () => {
  return (
    <Router>
      <div>

        <nav>
          <nav>
            <ul>
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </nav>

        </nav>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
