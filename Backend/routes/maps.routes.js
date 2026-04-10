const express= require('express')
const router = express.Router();
// const{body} = require("express-validator");
const mapscontroller= require('../controllers/maps.controller.js')
// const authmiddleware = require('../middlewares/auth.middleware')



router.post('/location',mapscontroller.locationTracker)


module.exports =router;
