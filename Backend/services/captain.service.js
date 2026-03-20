const captainModel=require('../models/captan.model')



module.exports.createCaptain=async({
    firstname,lastname,email,password,plate,color,capacity,vechicleType
})=>{
    if(!firstname || !lastname || !email || !password || !plate || !color || !capacity || !vechicleType){
        throw new Error("All fields are required")
    }
    const Captain=await captainModel.create({
        fullname:{
        firstname,
        lastname,
        },
        email,
        password,
        vechicle:{
            color,
            plate,
            capacity,
            vechicleType
        }
    })
    return Captain;

}