const User = require("../model/User")

const AddUserDataController = async(req,res)=>{
    try{
        await User.create(req.body)
        return res.status(200).json({msg:"User data has arrived",data:req.body})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message})
    }
}
const GetDataController = async(req,res)=>{
    try{
        const userdata = await User.find()
        return res.status(200).json({msg:"User data is fetched",data:userdata})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message})
    }
}
const DeleteDataController = async(req,res)=>{
    try{
        const {id}=req.params
        await User.findByIdAndDelete(id)
        return res.status(200).json({msg:"User data is deleted"})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message})
    }
}
const UpdateDataController = async(req,res)=>{
    try{
        const {id}=req.params
        const updaedata = req.body
        const isUpdate = await User.findByIdAndUpdate(id,updaedata,{new:true})
        if(!isUpdate){
            return res.status(404).json({msg:"User not found"})
        }
        return res.status(200).json({msg:"User data is updated",data:isUpdate})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message})
    }
}
module.exports = {
    AddUserDataController,
    GetDataController,
    DeleteDataController,
    UpdateDataController
}