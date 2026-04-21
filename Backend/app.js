const dotenv=require('dotenv')
dotenv.config()
const express=require('express');
const cors  =require('cors')
const app=express();
const connectToDb = require('./db/db')
const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')
const cookieParser = require('cookie-parser');
const maproutes=require('./routes/maps.routes')
const rideRoutes=require('./routes/ride.routes')

connectToDb();    //function call
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send("Krishna")
});

app.use('/users', userRoutes);
app.use('/captain', captainRoutes);
app.use('/maps',maproutes);
app.use('/rides',rideRoutes)



module.exports=app;