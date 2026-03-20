const mongoose=require('mongoose');
const bcrypt =require('bcrypt')
const jwt =require('jsonwebtoken')


const userSchema=mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            require:true,
            minlength:[3,'First name Must be at least 3 character']
        },
        lastname:{
            type:String,
            minlength:[3,'Last name must be at least 3 character']          
        }
    },

    email:{
        type:String,
        require:true,
        unique:true,
        minlength:[5,'email must be at least 5 character long']
    },

    password:{
        type:String,
        require:true,
        select:false        //Password normal queries me mat bhejna
    },

    socketid:{
        type:String
    },
})

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
    return token
}

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}

usermodel=mongoose.model('user',userSchema)

module.exports=usermodel;