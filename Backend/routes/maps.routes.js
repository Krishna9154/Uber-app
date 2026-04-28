const express= require('express')
const router = express.Router();
const{query} = require("express-validator");
const mapscontroller= require('../controllers/maps.controller.js')
const authmiddleware = require('../middlewares/auth.middleware')




router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authmiddleware.authUser,
    mapscontroller.getCoordinat
    
);

router.get('/get-distance-time',[
    query('Pickup').isString().isLength({min:3}),
    query('Destination').isString().isLength({min:3}),
],authmiddleware.authUser, mapscontroller.getDistanceTime);

router.get('/get-suggestions',[
    query('Pickup').isString().isLength({min:3}),
],authmiddleware.authUser, mapscontroller.getSuggestions);  


module.exports =router;
