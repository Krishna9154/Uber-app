const mapsservice =require('../services/maps.service')
const { validationResult } = require("express-validator"); 


module.exports.getCoordinat =async(req,res,next)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {address} = req.query;

    try {
        const coordinates = await mapsservice.mapService(address);
        if (coordinates) {
            res.json(coordinates);
        } else {
            res.status(404).json({ error: "Coordinates not found" });
        } 
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching coordinates" });
    }  

    
}

module.exports.getDistanceTime=async (req,res,next)=>{

    try{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {Pickup, Destination} = req.query;

    const distacnceTime = await mapsservice.getDistanceTime(Pickup, Destination);
    if(distacnceTime){
        res.json(distacnceTime);
    } else {
        res.status(404).json({error:"Distance and time not found for the given Pickup and Destination"});   

    } }catch(err){
        console.log(err);
        res.status(500).json({error:"An error occurred while fetching distance and time"});
    }
}

module.exports.getSuggestions=async (req,res,next)=>{
    
    try{
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({errors: error.array()})
        }
        const {Pickup} = req.query;
        const suggestions = await mapsservice.getSuggestions(Pickup);
        res.json(suggestions);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"An error occurred while fetching suggestions"});

    }

}