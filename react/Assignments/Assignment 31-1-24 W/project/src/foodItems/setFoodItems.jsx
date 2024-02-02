export default function SetFoodItems(foodItemsProps) {
    console.log(foodItemsProps.foodItemsProps, "=====>>>>footitems")
    return (
        <>
            <div className="setFoodItems_main">
                {/* {foodItemsProps.foodItemsProps.map(items => ( */}
                <div className='setFoodItems_subMain'>
                    <div className="setFoodItems_image">
                        <img src={foodItemsProps.foodItemsProps.imageSrc} alt={foodItemsProps.foodItemsProps.name} />
                    </div>
                    <div className="setFoodItemsDesc">
                        <h3>{foodItemsProps.foodItemsProps.name}</h3>
                        <p>{foodItemsProps.foodItemsProps.desc}</p>
                        <p>{foodItemsProps.foodItemsProps.quant === "0" ? "SOLD OUT" : foodItemsProps.foodItemsProps.quant}</p>
                    </div>
                </div>
                {/* ))} */}
            </div>
        </>
    )

}