const usermodel=require('../models/user.model');
const captainModel=require('../models/captan.model');
const jwt=require('jsonwebtoken');
const blacklistTokenModel=require('../models/blackListToken.model');


module.exports.authUser=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const blacklistedToken=await blacklistTokenModel.findOne({token:token});    //BlacklistToken Checking
    if(blacklistedToken){
        return res.status(401).json({message:"Unauthorized"});
    }

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user=await usermodel.findById(decoded._id);
        req.user=user;
        return next();
    } catch (error) {
        return res.status(401).json({message:"unauthorized"});
    }
}

module.exports.authCaptain=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }

    const blacklistedToken=await blacklistTokenModel.findOne({token:token});    //BlacklistToken Checking
    if(blacklistedToken){
        return res.status(401).json({message:"kya cheda bhosadi blacklisttoken"});
    }

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        const captain=await captainModel.findById(decoded._id);
        req.captain=captain;  // ise iss liye bejate taki db se dubara captain ko fetch na karna pade har baar jab bhi koi protected route access karega to req.captain me captain ki information available hogi
        return next();
    } catch (error) {
        return res.status(401).json({message:"unauthorized"});
    }
}

