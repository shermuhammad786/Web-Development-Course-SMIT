import mongoose from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDb Connect");
    } catch (error) {
        console.log(error , "===>>>> error");
    }
}
export default connection;