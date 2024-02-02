import FocacciaImage from './foodImages/Focaccia.jpeg';
import PizzaMargheritaImage from './foodImages/PizzaMargherita.jpeg';
import PizzaSpinaciImage from './foodImages/PizzaSpinaci.jpeg';
import PizzaFughiImage from './foodImages/PizzaFughi.jpeg';
import SalaminoImage from './foodImages/Salamino.jpeg';
import ProsciuttoImage from './foodImages/Prosciutto.jpeg';

import SetFoodItems from './setFoodItems';


export default function FoodItemsFun() {
    const foodItems = [
        {
            name: "Focaccia",
            desc: "Bread with italian olive oil and rosemary",
            quant: 6,
            imageSrc: FocacciaImage
        },
        {
            name: "Pizza Margherita",
            desc: "Tomato and mozarella",
            quant: 10,
            imageSrc: PizzaMargheritaImage
        },
        {
            name: "Pizza Spinaci",
            desc: "Tomato, mozarella, spanish and ricotta cheese",
            quant: 12,
            imageSrc: PizzaSpinaciImage
        },
        {
            name: "Pizza Fughi",
            desc: "Tomato, mozarella, mushrooms and onion",
            quant: 12,
            imageSrc: PizzaFughiImage
        },
        {
            name: "Pizza Salamino",
            desc: "Tomato, mozarella and pepperoni",
            quant: "0",
            imageSrc: SalaminoImage
        },
        {
            name: "Pizza Prosciutto",
            desc: "Tomato, mozarella, ham, aragula and burrata cheese",
            quant: 18,
            imageSrc: ProsciuttoImage
        },
    ];
    return (
        <div className="foodItemsContainer">
            {foodItems.map(items => (
                // <div className='foodItemsContainer'>
                //     <div style={{ border: "4px solid green", }}>
                //         <img src={items.imageSrc} alt={items.name} width={"80px"} height={"80px"} />
                //     </div>
                //     <div className="foodItemsDesc">
                //         <h1>{items.name}</h1>
                //         <p>{items.desc}</p>
                //         <p>{items.quant}</p>
                //     </div>
                // </div>

                <SetFoodItems foodItemsProps={items} />
            ))}
        </div>
    );

}