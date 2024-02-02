import { Schema } from 'mongoose';
import productSchemaHandler from "../../productModel/productSchema.js";

export const deleteProductController = async (req, res) => {
    try {
        console.log(req.params)
        const _id = req.params.id
        const deleteProduct = await productSchemaHandler.findByIdAndDelete(_id)
        res.json({
            status:true,
            message:"Product deleted successfully",
        })
    } catch (error) {
        res.json({
            status:false,
            message:error.message,
            myMessage:"product not deleted"
        })
    }
}