// import logo from './logo.svg';
import './App.css';
import "./index.css"

// components
import Heading from './heading/heading';
import OurMenu from './ourMenu/ourMenu';
import SmallHeading from './smallHeading/smallHeading';
import FoodItems from './foodItems/foodItems';
import OpenTime from './footer/openTime';
import OrderNow from './footer/orderNow';

function App() {
  return (
    <div className="App">

      <Heading />
      <OurMenu />
      <SmallHeading />
      <div className='footMainContainer'>
      <FoodItems />
      </div>
      <OpenTime />
      <OrderNow />

    </div>
  );
}

export default App;
