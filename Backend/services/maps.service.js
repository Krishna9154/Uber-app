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
  console.log(Pickup, Destination);
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

      const disTime = {
        distance: response3.data.routes[0].distance ,
        time: response3.data.routes[0].duration,
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

module.exports.getSuggestions = async (Pickup) => {
  if (!Pickup) {
    throw new Error("address is required");
  }

  // const apiKey = process.env.maps_api_key;
  // const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?Pickup=${encodeURIComponent(Pickup)}&key=${apiKey}`;
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${Pickup}&format=json&limit=5`, {
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