const User = require("../models/userModel");


exports.createUser = async(req,res,next)=>{
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({
            status:"success",
            data:{
                user:newUser
            }
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


exports.getUsers = async(req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json({
            status:"success",
            result:users.length,
            data:{
                users
            }
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


exports.getUser = async(req,res,next)=>{
    try {
        const usreId = req.params.id;
        const user = await User.findById({_id:usreId});
        res.status(200).json({
            status:"success",
            data:{
                user
            }
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}



exports.updateUser = async(req,res,next)=>{
    try {
        const usreId = req.params.id;
        const user = await User.findByIdAndUpdate({_id:usreId},req.body, {new:true});
        res.status(201).json({
            status:"success",
            data:{
                user
            }
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}


exports.deleteUser = async(req,res,next)=>{
    try {
        const usreId = req.params.id;
        const user = await User.findByIdAndDelete({_id:usreId});
        res.status(201).json(null);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}