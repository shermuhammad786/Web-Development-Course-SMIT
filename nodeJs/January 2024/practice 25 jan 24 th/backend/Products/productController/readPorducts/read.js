import { Schema } from "mongoose";
import productSchemaHandler from "../../productModel/productSchema.js";

export const getAllProductsController = async (req, res) => {
    console.log(req.query)
    const getAllProducts = await productSchemaHandler.find();
    res.send(getAllProducts)
}