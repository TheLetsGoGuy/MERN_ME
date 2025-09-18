const express = require("express")
const { AddUserDataController,GetDataController,DeleteDataController,UpdateDataController} = require("../controller/userController")
const router = express.Router()
const JWTverify = require("../middleware/jwtVerifyMiddleware")

router.post("/add-user",JWTverify, AddUserDataController)
router.get("/getall-user",JWTverify, GetDataController)
router.delete("/delete-user/:id",JWTverify, DeleteDataController)
router.put("/update-user/:id",JWTverify, UpdateDataController)

module.exports = router