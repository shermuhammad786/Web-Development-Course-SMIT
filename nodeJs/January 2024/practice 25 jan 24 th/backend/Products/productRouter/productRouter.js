import express from "express";
import { addProductController } from "../productController/createProducts/add.js";
import { deleteProductController } from "../productController/deleteProduct/delete.js";
import { updateDataController } from "../productController/updateDate/update.js";
import { getAllProductsController } from "../productController/readPorducts/read.js";

// import { singUpController } from "../controller/signUp/user.js";
// import { loginController } from "../controller/login/login.js";

const productRoutes = express.Router();

productRoutes.post("/addProduct", addProductController);
productRoutes.get("/getAllProducts", getAllProductsController);
productRoutes.delete("/deleteProduct/:id", deleteProductController);
productRoutes.put("/updateProduct/:id", updateDataController);


export default productRoutes