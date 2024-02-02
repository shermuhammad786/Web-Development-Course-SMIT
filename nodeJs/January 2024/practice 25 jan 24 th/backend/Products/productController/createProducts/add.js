import { Schema } from 'mongoose';
import productSchemaHandler from '../../productModel/productSchema.js';

export const addProductController = async (req, res) => {
    try {
        const { name, price, rating, brand } = req.body;
        const products = {
            name: name,
            price: price,
            rating: rating,
            brand: brand
        }
        const saveProduct = await productSchemaHandler(products)
        const savingProducts = await saveProduct.save();
        if (savingProducts) {
            res.json({
                status: true,
                message: "product Added Scuccessfully",
            })
        } else {
            res.json({
                status: false,
                message: "server error product not  added",
            })
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }


}







// console.log(req.body)
// const response = await fetch("http://localhost:9000/auth/allUsers");
// const userData = await response.json();
// const singleUser = userData.find(user =>{

//     res.send(singleUser)
// })

// res.json({
//     data: userData
// });

//     // console.log(userData);
// } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Internal Server Error" });
// }


// return



// const { name, price, rating, brand } = req.body;
// const products = {
//     name: name,
//     price: price,
//     rating: rating,
//     brand: brand
// }
// const saveProduct = await productSchemaHandler(products)
// const savingProducts = await saveProduct.save();
// if (savingProducts) {
//     res.json({
//         status: true,
//         message: "product Added Scuccessfully",
//     })
// } else {
//     res.json({
//         status: false,
//         message: "server error product not  added",
//     })
// }
// }