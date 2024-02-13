import React, { useEffect } from 'react';
import Buttons from "./buttons/Buttons";
import "./items.css";

export default function Items({ items, setItems }) {
  const checking = (index) => {
    const updatedItems = [...items];
    updatedItems[index].packed = !updatedItems[index].packed;
    setItems(updatedItems);
  };

  // Sort items based on the 'order' property
  const sortedItems = [...items].sort((a, b) => a.order - b.order);

  // useEffect(() => {
  //   // Sort items by default when the component mounts
  //   const itemsWithOrder = items.map((item, index) => ({ ...item, order: index }));
  //   setItems([...itemsWithOrder]);
  // }, [items, setItems]);

  const removeItem = (e) => {
    console.log(e.parentNode)
  }
  return (
    <div className='dflex justS_A alignCenter fdc packageList'>
      <div style={{ width: "40%", margin: "0 auto", gap: "10px" }} className='fw dflex'>
        {sortedItems.map((e, index) => (
          <div className="dflex gap" key={index}>
            <input type="checkbox" checked={e.packed} onClick={() => checking(index)} />
            <p style={{ textDecoration: e.packed ? "line-through" : "none" }}>
              {e.quantity} {e.name}
            </p>
            <p style={{ color: "red" }} onClick={() => removeItem(this)}>x</p>
          </div>
        ))}
      </div>
      <div>
        <Buttons setItems={setItems} items={items} />
      </div>
    </div >
  );
}











// // import React, { useState } from 'react'
// import Buttons from "./buttons/Buttons";
// import "./items.css"

// export default function Items({ items, setItems }) {
//   const checking = (e, index, isChecked) => {
//     items[index].packed === false ? items[index].packed = true : items[index].packed = false
//     const preItems = [...items];
//     setItems(preItems)
//   }
//   return (
//     <div className='dflex justS_A alignCenter fdc packageList'>
//       <div style={{ width: "40%", margin: "0 auto", gap: "10px" }} className='fw dflex'>
//         {items?.map((e, index) => (
//           <div className="dflex gap">
//             <input type="checkbox" checked={e.packed} onClick={() => checking(e, index)} />
//             <p key={index} style={{ textDecoration: e.packed ? "line-through" : "none" }}>  {e.quantity} {e.name}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         <Buttons setItems={setItems} items={items} />
//       </div>
//     </div>
//   )
// }
