const userModel=require('../models/user.model')




module.exports.createUser=async({   //  user service ke createUser function ko define kiya gaya hai, jo ki ek asynchronous function hai. Is function me hum user create karne ke liye required fields ko destructure kar rahe hain, jaise ki firstname, lastname, email, aur password. Agar koi bhi required field missing hoti hai to ek error throw kiya jata hai. Agar sabhi fields valid hote hain to userModel ke create method ko call karke ek naya user database me create kiya jata hai aur us user object ko return kiya jata hai.
    firstname,lastname,email,password 
})=>{
    if(!firstname || !email || !password){
        throw new Error('All fields are required')
    }
    const user = await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}