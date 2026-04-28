const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const middleware = require('../middlewares/auth.middleware');
const rideController = require('../controllers/ride.controller');

router.post('/create',middleware.authUser, [
    body('pickup').isString().isLength({ min: 3 }).withMessage("Invalid pickup address"),
    body('destination').isString().isLength({ min: 3 }).withMessage("Invalid dropoff address"),
    body('vehicleType').isString().isIn(['auto','car', 'bike']).withMessage("Invalid vehicle type")


], rideController.createRide)



module.exports = router;