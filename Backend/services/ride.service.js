const rideModel = require('../models/ride.model');
const { getDistanceTime } = require('../services/maps.service')
const crypto = require('crypto');



async function getFare(pickup, destination) {

    if (!pickup || !destination) {
        throw new Error("Pickup and destination are required");
    }

    const disTime = await getDistanceTime(pickup, destination);

    const distanceKm = disTime.distance / 1000;
    const timeMin = disTime.time / 60;

    // Base fare + per km + per min
    const fareRates = {
        car: {
            baseFare: 50,
            perKm: 15,
            perMin: 2
        },
        auto: {
            baseFare: 30,
            perKm: 10,
            perMin: 1.5
        },
        bike: {
            baseFare: 20,
            perKm: 8,
            perMin: 1
        }
    };

    const fares = {
        car: Math.round(
            fareRates.car.baseFare +
            (distanceKm * fareRates.car.perKm) +
            (timeMin * fareRates.car.perMin)
        ),

        auto: Math.round(
            fareRates.auto.baseFare +
            (distanceKm * fareRates.auto.perKm) +
            (timeMin * fareRates.auto.perMin)
        ),

        bike: Math.round(
            fareRates.bike.baseFare +
            (distanceKm * fareRates.bike.perKm) +
            (timeMin * fareRates.bike.perMin)
        )
    };

    return fares;



}

function getOtp(num){
    function generateOtp(num){
        const otp=crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString();
        return otp;
    }
    return generateOtp(num);
}


module.exports.createRide = async ({ user, pickup, destination, vehicleType }) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error("All fields are required");
    }

    const fares = await getFare(pickup, destination);

    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fares[vehicleType]
        
    });
    return ride;
}
