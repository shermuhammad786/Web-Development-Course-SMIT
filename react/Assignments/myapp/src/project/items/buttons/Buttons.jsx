export default function Buttons({ setItems, items }) {
    const changingOrder = (e) => {
        const preItems = [...items];
        const value = e.target.value;
        if (value === "packed") {
            const packedSort = preItems.sort((a, b) => b.packed - a.packed)
            setItems(packedSort)
        } else if (value === "description") {
            const discriptionSort = preItems.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            setItems(discriptionSort)
        }
        // sort by description
        // sort by packing
        // const packedSort = preItems.sort((a, b) => b.packed - a.packed)

        // // set condition
        // e.target.value === "description" ? setItems(discriptionSort) : e.target.value === "packed" ? setItems(packedSort) : setItems([])

    }
    return (
        <div className="dflex gap">
            <select className="itemsQuantity" onChange={changingOrder} name="sorted" id="sorted">
                <option value="series">SORT BY INPUT ORDER</option>
                <option value="description">SORT BY DESCRIPTION</option>
                <option value="packed">SORT BY PACKED STATUS</option>
            </select>
            <button className="itemsQuantity" onClick={() => {
                setItems([])
            }}>Clear List</button>
        </div>
    )
}






// export default function Buttons({ setItems, items }) {
//     const changingOrder = (e) => {
//         console.log("🚀 ~ changingOrder ~ e:", e.target.value)
//         const preItems = [...items];
//         // const fakeItems = preItems.map((singleItem , index) => index)
//         //  return to origin condition
//         // const sortByOriginal = fakeItems.sort((a,b) => preItems[a] - preItems[b])

//         // sort by description
//         const sortedArray = preItems.sort((a, b) => {
//             return a.name.localeCompare(b.name);
//         });
//         // sort by packing
//         // const sortedBypacked = [...fakeArray]
//         const packedSort = preItems.sort((a, b) => b.packed - a.packed)
//         // console.log(packedSort)

//         // console.log(sortedArray, "===>>> sorted array");
//         // console.log(items, "===>>> items")

//         e.target.value === "description" ? setItems(sortedArray) : e.target.value === "packed" ? setItems(packedSort) : setItems(items)
//     }
//     return (
//         <div>
//             <select onChange={changingOrder} name="sorted" id="sorted">
//                 <option value="series">SORT BY INPUT ORDER</option>
//                 <option value="description">SORT BY DESCRIPTION</option>
//                 <option value="packed">SORT BY PACKED STATUS</option>
//             </select>
//             <button onClick={() => {
//                 setItems([])
//             }}>Clear List</button>
//         </div>
//     )
// }

// import React, { useEffect } from 'react';

// export default function Buttons({ setItems, items }) {
//     const changingOrder = (e) => {
//         const preItems = [...items];

//         // Sort by description
//         if (e.target.value === 'description') {
//             const sortedArray = preItems.sort((a, b) => a.name.localeCompare(b.name));
//             setItems([...sortedArray]);
//         }

//         // Sort by packed status
//         else if (e.target.value === 'packed') {
//             const packedSort = preItems.sort((a, b) => b.packed - a.packed);
//             setItems([...packedSort]);
//         }

//         else {
//             setItems([...preItems]);
//         }
//     };

//     // Set items to their original order when the component mounts
//     useEffect(() => {
//         setItems([...items]);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []); // Empty dependency array ensures this runs only on mount

//     return (
//         <div>
//             <select onChange={changingOrder} name="sorted" id="sorted" defaultValue="series">
//                 <option value="series">SORT BY INPUT ORDER</option>
//                 <option value="description">SORT BY DESCRIPTION</option>
//                 <option value="packed">SORT BY PACKED STATUS</option>
//             </select>
//             <button onClick={() => setItems([])}>Clear List</button>
//         </div>
//     );
// }


