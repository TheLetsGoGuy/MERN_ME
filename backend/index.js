require("dotenv").config()
const express = require("express")
const basicRouter = require("./src/router/basicRouter")
const userRouter = require("./src/router/userRouter")
const connDb = require("./src/config/connDB")
const authRouter = require("./src/router/authRouter")
const path = require("path")
const productRouter = require("./src/router/productRouter")
const cors = require("cors")

const server =express()
server.use(cors())
server.use(express.json())
server.use("/public",express.static(path.join(__dirname,"public")))

// server.get("/",Home)
server.use("/api/v1/",basicRouter)
server.use("/api/v1/user",userRouter)
server.use("/api/v1/auth",authRouter)
server.use("/api/v1/product",productRouter)

connDb().then(()=>{
    server.listen(4000,()=>{
    console.log("Server is running on port http://localhost:4000/")
}) 
}).catch((err)=>{   
    console.error("Failed to connect to the database:", err);
})


//0 t0 65535
// M E R N