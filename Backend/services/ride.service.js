const rideModel = require('../models/ride.model');
const { getDistanceTime } = require('../services/maps.service')



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
        motorcycle: {
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

        motorcycle: Math.round(
            fareRates.motorcycle.baseFare +
            (distanceKm * fareRates.motorcycle.perKm) +
            (timeMin * fareRates.motorcycle.perMin)
        )
    };

    return fares;



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
        fare: fares[vehicleType]
    });
    return ride;
}
