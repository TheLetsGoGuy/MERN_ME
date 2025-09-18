const User = require("../model/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Register =async(req, res)=>{
    try{
        const {name,email,password,phone,address} = req.body
        const isEmailExist = await User.findOne({email:email});
        if(isEmailExist){
            return res.status(400).json({msg:"User already exist",success:false})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        await User.create({name,email,password:hashedPassword,phone,address})
        return res.status(200).json({msg:"User registered successfully",success:true})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message,success:false})
    }
}
const Login =async(req, res)=>{
    try{
        const {email, password} = req.body
        const isEmailExist = await User.findOne({email:email});
        if(!isEmailExist){
            return res.status(404).json({msg:"Credential Invalid",success:false})
        }
        const isPasswordMatch = await bcrypt.compare(password, isEmailExist.password)
        if(!isPasswordMatch){
            return res.status(404).json({msg:"Credential Invalid",success:false})
        }
        const token = jwt.sign({id:isEmailExist._id,email:isEmailExist.email},process.env.JWT_SCRECT_KEY,{expiresIn:"1d"})
        return res.status(200).json({msg:"User logged in successfully",data:token,success:true})
    }catch(error){
        return res.status(500).json({msg:"Server error!!",error:error.message,success:false})
    }
}
const Logout =async(req, res)=>{}
const Profile =async(req, res)=>{
    if(req.user){
        const userdata = await User.findById(req.user.id)
        if(!userdata){
            return res.status(404).json({msg:"User not found"})
        }
        return res.status(200).json({msg:"User Found",data:userdata})
    }
}

module.exports = {
    Register, 
    Login, 
    Logout, 
    Profile
}