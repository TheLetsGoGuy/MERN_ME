const Product = require("../model/Product")

const AddProductDataController = async(req,res)=>{
    try{
        const prepareData ={
            pname:req.body.pname,
            pdes:req.body.pdes,
            pprice:req.body.pprice,
            pimage:`/public/${req.file.filename}}`
        }
        const data = await Product.create(prepareData)
        return res.status(200).json({msg:"Product data has arrived",data:data})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message})
    }
}
const GetProductDataController = async(req,res)=>{
    try{
        const Productdata = await Product.find()
        return res.status(200).json({msg:"Product data is fetched",data:Productdata})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message})
    }
}
const DeleteProductDataController = async(req,res)=>{
    try{
        const {id}=req.params
        await Product.findByIdAndDelete(id)
        return res.status(200).json({msg:"Product data is deleted"})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message})
    }
}
const UpdateProductDataController = async(req,res)=>{
    try{
        const {id}=req.params
        const updaedata = req.body
        const isUpdate = await Product.findByIdAndUpdate(id,updaedata,{new:true})
        if(!isUpdate){
            return res.status(404).json({msg:"Product not found"})
        }
        return res.status(200).json({msg:"Product data is updated",data:isUpdate})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message})
    }
}
module.exports = {
    AddProductDataController,
    GetProductDataController,
    DeleteProductDataController,
    UpdateProductDataController
}