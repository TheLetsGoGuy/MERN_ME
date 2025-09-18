const express = require("express")
const { AddProductDataController,GetProductDataController,DeleteProductDataController,UpdateProductDataController} = require("../controller/productController")
const router = express.Router()
const JWTverify = require("../middleware/jwtVerifyMiddleware")
const Uploader = require("../middleware/uploadMiddleware")

router.post("/add-product",Uploader.single("pimage"),AddProductDataController)
router.get("/getall-product", GetProductDataController)
router.delete("/delete-product/:id", DeleteProductDataController)
router.put("/update-product/:id", UpdateProductDataController)

module.exports = router