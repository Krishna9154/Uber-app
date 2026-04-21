const express = require('express');
const rideservice = require('../services/ride.service');
const { validationResult } = require('express-validator');



module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination, vehicleType } = req.body;
    try {

        const ride = await rideservice.createRide({user:req.user._id, pickup, destination, vehicleType});
        return res.status(201).json(ride);
    } catch (error) {
        console.log("Error:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}