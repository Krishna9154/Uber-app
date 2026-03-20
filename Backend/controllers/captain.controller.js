const captanModel=require('../models/captan.model');
const captainService=require('../services/captain.service');
const {validationResult}=require('express-validator');
const blacklistModel=require('../models/blackListToken.model');

module.exports.registerCaptain=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
       }

    const {fullname,email,password,vechicle}=req.body;
    const  iscaptainAlreadyExist=await captanModel.findOne({email});
    if(iscaptainAlreadyExist){
        return res.status(400).json({error:"Captain with this email already exists"});
    }
    
    const hashPassword=await captanModel.hashPassword(password);

    const captain=await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword,
        plate:vechicle.plate,
        color:vechicle.color,
        capacity:vechicle.capacity,
        vechicleType:vechicle.vechicleType
    });

    const token=captain.generateAuthToken();
    res.status(201).json({captain,token})


}

module.exports.loginCaptain=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
       }
    const {email,password}=req.body;

    const captain=await captanModel.findOne({email}).select("+password");
    if(!captain){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const isMatch=await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token=captain.generateAuthToken();

    res.cookie("token",token);   // IN production res.cookie("token",token, {httpOnly:true});
    res.status(200).json({captain,token});

}

module.exports.getCaptainProfile=async(req,res)=>{
    res.status(200).json({captain:req.captain});

}

module.exports.logoutCaptain=async(req,res)=>{
    const token=req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistModel.create({token});
    res.clearCookie("token");
    res.status(200).json({message:"Logged out successfully"});
}