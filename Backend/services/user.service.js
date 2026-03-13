const userModel=require('../models/user.model') // Importing the user model to interact with the database user se related operations perform karne ke liye user model ko import kiya gaya hai. Isse hum database me user create, read, update, delete (CRUD) operations perform kar sakte hain.


module.exports.createUser=async({
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