import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const productSchemaHandler = mongoose.model('Products', ProductsSchema);
export default productSchemaHandler;
