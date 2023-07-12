import userModel from "../models/userModel.js"

export const createUserControlller = async(req, res)=>{
    try{
        const {name, email, phone} = req.body
        const user = await userModel.create({name, email, phone})
        return res.status(201).json({success:true, message:"User Created", data:user})

    }catch(error){
        console.log(error)
        return res.status(500).json({success:false, message:error})
    }
}

export const getAllUsersControlller = async(req, res)=>{
    try{
        const allUsers = await userModel.find({})
        return res.status(200).json({success:true, message:"All Users", data:allUsers})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false, message:error})
    }
}

export const getSingleUserControlller = async(req, res) => { 
    try{
        const {id}= req.params
        const existUser = await userModel.findById(id)
        return res.status(200).json({success:true, message:"User Found", data:existUser})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false, message:error})
    }
}

export const updateUserControlller = async(req, res)=>{
    try{
        const {id}= req.params
        const {name, email, phone} = req.body
        const updatedUser = await userModel.findByIdAndUpdate(id, {name, email, phone}, {new:true})
        return res.status(200).json({success:true, message:"User Updated", data:updatedUser})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false, message:error})
    }
}

export const deleteUserControlller = async(req, res)=>{
    try{
        const {id}= req.params
        const deletedUser = await userModel.findByIdAndDelete(id)
        return res.status(200).json({success:true, message:"User Deleted", data:deletedUser})
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false, message:error})
    }
}