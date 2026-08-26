const axios = require("axios");
const { response } = require("../app");

module.exports.mapService = async (address) => {

  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`, {
      headers: {
        'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
        'Accept-Language': 'en'
      },
      timeout: 5000
    });

    if (response.data.length > 0) {
      // const location = response.data.results[0].geometry.location;
      return {
        lat: response.data[0].lat,
        lng: response.data[0].lat
      };
    } else {
      throw new Error(response.data.status);
    }
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}

module.exports.getDistanceTime = async (Pickup, Destination) => {
  if (!Pickup || !Destination) {
    throw new Error("Origin and Destination are required");
  }
  // const apiKey = process.env.maps_api_key;
  // const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(Pickup)}&destinations=${encodeURIComponent(Destination)}&key=${apiKey}`;

  try {

    const originRes = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(Pickup)}&format=json&limit=1`, {
      headers: {
        'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
        'Accept-Language': 'en'
      },
      timeout: 5000
    });

    const destinationRes = await axios.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(Destination)}&format=json&limit=1`, {
      headers: {
        'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
        'Accept-Language': 'en'
      },
      timeout: 5000
    });

    if (originRes.data.length > 0 && destinationRes.data.length > 0) {
      const LAT1 = originRes.data[0].lat;
      const LON1 = originRes.data[0].lon;
      const LAT2 = destinationRes.data[0].lat;
      const LON2 = destinationRes.data[0].lon;
      // console.log(LAT1, LON1, LAT2, LON2);

      const response3 = await axios.get(`http://router.project-osrm.org/route/v1/driving/${LON1},${LAT1};${LON2},${LAT2}?overview=full&geometries=geojson`, {
        headers: {
          'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
          'Accept-Language': 'en'
        },
        timeout: 5000
      });

      const distance =response3.data.routes[0].distance
      const time =response3.data.routes[0].duration
      const geometry =response3.data.routes[0].geometry
      const data={distance,time}
      const rideData  = calculateFare(data)


      const disTime = {
        Pickup,
        Destination,
        rideData,
        geometry,
        coOrdinates:{
          Pickup: {
            lat: LAT1,
            lng: LON1
          },
          Destination: {
            lat: LAT2,
            lng: LON2
          }
        }
      }
      return disTime

    } else {
      throw new Error("Unable to fetch distance and time information");
    }

  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }
}

module.exports.getSuggestions = async (Pickup,Destination) => {
  if (!Pickup) {
    throw new Error("address is required");
  }

  // const apiKey = process.env.maps_api_key;
  // const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?Pickup=${encodeURIComponent(Pickup)}&key=${apiKey}`;
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${Pickup || Destination}&format=json&limit=5`, {
      headers: {
        'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
        'Accept-Language': 'en'
      },
      timeout: 5000
    });
    if (response.data.length > 0) {
      return response.data || [];
    } else {
      throw new Error("Unable to fetch suggestions");
    }

  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }
}


function calculateFare(rideData) {
  const { distance, time } = rideData; // distance in meters, time in seconds

  // Convert to km and minutes
  const distanceKm = distance / 1000;
  const timeMinutes = time / 60;

  // Vehicle-wise rate configuration (bike sabse sasta, phir auto, phir car)
  const vehicleConfig = {
    bike: {
      baseFare: 20,
      ratePerKm: 6,
      ratePerMin: 0.8,
      minimumFare: 30,
      surgeMultiplier: 1
    },
    auto: {
      baseFare: 30,
      ratePerKm: 9,
      ratePerMin: 1.1,
      minimumFare: 50,
      surgeMultiplier: 1
    },
    car: {
      baseFare: 50,
      ratePerKm: 12,
      ratePerMin: 1.5,
      minimumFare: 80,
      surgeMultiplier: 1
    }
  };

  // Helper function to calculate fare for a single vehicle type
  function calculateVehicleFare(config) {
    const distanceFare = distanceKm * config.ratePerKm;
    const timeFare = timeMinutes * config.ratePerMin;

    let totalFare = (config.baseFare + distanceFare + timeFare) * config.surgeMultiplier;
    totalFare = Math.max(totalFare, config.minimumFare);

    return {
      baseFare: Number(config.baseFare.toFixed(2)),
      distanceFare: Number(distanceFare.toFixed(2)),
      timeFare: Number(timeFare.toFixed(2)),
      surgeMultiplier: config.surgeMultiplier,
      totalFare: Number(totalFare.toFixed(2))
    };
  }

  // Calculate for all vehicle types
  return {
    distanceKm: Number(distanceKm.toFixed(2)),
    timeMinutes: Number(timeMinutes.toFixed(2)),
    bike: calculateVehicleFare(vehicleConfig.bike),
    auto: calculateVehicleFare(vehicleConfig.auto),
    car: calculateVehicleFare(vehicleConfig.car)
  };
}



