import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';
function App() {
  return (
    <Router className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />


      </Routes>
    </Router>
  );
}

export default App;
