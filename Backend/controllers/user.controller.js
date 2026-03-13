const userModel=require('../models/user.model') // Importing the user model to interact with the database user se related operations perform karne ke liye user model ko import kiya gaya hai. Isse hum database me user create, read, update, delete (CRUD) operations perform kar sakte hain.
const userService=require('../services/user.service') // Importing the user service to handle business logic related to user operations. User se related business logic ko handle karne ke liye user service ko import kiya gaya hai. Isse hum user se related complex operations ko service layer me implement kar sakte hain, jisse controller clean aur maintainable rahe.
const {validationResult}=require('express-validator') // Express-validator se validationResult function ko import kiya gaya hai, jisse hum request ke validation results ko check kar sakte hain aur agar validation fail hota hai to appropriate response bhej sakte hain.






module.exports.registerUser=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
       }

    const {fullname , email,password}=req.body;
    const hashPassword=await userModel.hashPassword(password);
    const user = await userService.createUser({
        firstname:fullname.firstname,
        lasrname:fullname.lastname,
        email,
        password:hashPassword

    });
    const token=user.generateAuthToken();
    res.status(201).json({user,token})
} 