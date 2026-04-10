const mapsservice =require('../services/maps.service')


module.exports.locationTracker =async(req,res)=>{

    const {from, to}=req.body;
    const location = await mapsservice.coordinatesTracker({from , to})
    res.status(200).json({location})

}