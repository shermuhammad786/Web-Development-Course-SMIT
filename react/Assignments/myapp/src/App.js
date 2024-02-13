import Haeder from "./project/header/haeder";
import Items from "./project/items/Items";
import "./app.css"
import { useState } from "react";
import Footer from "./project/Footer/Footer";
function App() {
  const [items, setItems] = useState([
    {
      name: "brush",
      quantity: 2,
      packed: true,
    },
    {
      name: "socks",
      quantity: 1,
      packed: false,
    },
    {
      name: "laptop",
      quantity: 1,
      packed: false,
    },
    {
      name: "charger",
      quantity: 1,
      packed: false,
    },
    {
      name: "bat",
      quantity: 2,
      packed: false,
    }
  ]);

  return (
    <div className="App">
      <Haeder items={items} setItems={setItems} />
      < Items items={items} setItems={setItems} />
      <Footer items={items} />
    </div>
  );
}

export default App;
