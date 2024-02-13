import React from 'react'
import "./Footer.css"
export default function Footer({ items }) {
    const packedItems = items.filter(e => e.packed === true);
    const packedItemsLength = packedItems.length;
    const percentage = (100 * packedItemsLength) / items.length;
    const percentageValue = Math.floor(percentage)

    return (
        <div className='dflex justCenter footer alingItem' style={{ backgroundColor: "#67C1A3" }}>
            <p>You have {items.length} items on your list, and you already packed {packedItemsLength} ({!percentageValue ? "0" : percentageValue}%)</p>
        </div>
    )
}
