import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<About />} />
        </Routes>
      </BrowserRouter>
      <link to="users" />
    </>

  );
}

export default App;
