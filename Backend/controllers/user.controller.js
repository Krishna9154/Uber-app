const userModel=require('../models/user.model')
const userService=require('../services/user.service') 
const {validationResult}=require('express-validator') 
const blacklistModel=require('../models/blackListToken.model')              





module.exports.registerUser=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
       }

    const {fullname,email,password}=req.body;
    const isuserAlreadyExist=await userModel.findOne({email});
    if(isuserAlreadyExist){
        return res.status(400).json({error:"User with this email already exists"});
    }
    const hashPassword=await userModel.hashPassword(password);
    const user = await userService.createUser({  // User service ke createUser function ko call karke ek naya user create kiya ja raha hai.
        firstname:fullname.firstname, // Isse hum user service ke createUser function me directly in parameters ke through access kar sakte hain. 
        lasrname:fullname.lastname,
        email,
        password:hashPassword

    });
    const token=user.generateAuthToken();                                     //token
    res.status(201).json({user,token})
} 

module.exports.loginUser=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
       }
       const {email,password}=req.body;
       const user=await userModel.findOne({email}).select("+password");    //user
       if(!user){
        return res.status(401).json({message:"Invalid email or password"});
       }

       const isMatch=await user.comparePassword(password);
       if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
       }
       const token=user.generateAuthToken();        // generate token
       
       res.cookie("token",token)                    //set token in cookie
                                  
       res.status(200).json({user,token})

}

module.exports.getUserProfile=async(req,res)=>{
    res.status(200).json(req.user)
}

module.exports.logoutUser=async(req,res)=>{
    const token=req.cookies.token || req.headers.authorization?.split(" ")[1];
    await blacklistModel.create({token});
    res.clearCookie("token");
    res.status(200).json({message:"Logged out successfully"})
}