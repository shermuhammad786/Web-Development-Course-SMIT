import { Schema } from 'mongoose';
import productSchemaHandler from '../../productModel/productSchema.js';

export const updateDataController = async (req, res) => {
    try {
        const { name, price, rating, brand } = req.body;

        const newData = {
            name: name,
            price: price,
            rating: rating,
            brand: brand,
        };

        const _id = req.params.id;

        // Assuming productSchemaHandler is a Mongoose model
        const updateData = await productSchemaHandler.findByIdAndUpdate(_id, newData, { new: true });

        if (!updateData) {
            return res.status(404).json({
                status: false,
                message: 'Product not found',
            });
        }

        res.status(200).json({
            status: true,
            message: 'Product updated successfully',
            updatedData: updateData,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Internal server error',
            errorMessage: error.message,
        });
    }
};
