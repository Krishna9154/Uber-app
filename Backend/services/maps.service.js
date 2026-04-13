const axios = require("axios");
const { response } = require("../app");

module.exports.mapService = async (address) => {
  console.log(address);

  const apiKey = process.env.maps_api_key;
  const url=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
  
  try {
    const response = await axios.get(url);
    console.log(response.data);

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      

      return {
        lat: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error(response.data.status);
    }
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}


  module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination){
      throw new Error("Origin and destination are required");
    }
    const apiKey = process.env.maps_api_key;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try{

      const response = await axios.get(url);
      if(response.data.status === "OK"){

        if(response.data.rows[0].elements[0].status === "Zero Results"){
          throw new Error("No results found for the given origin and destination");
        }

        return response.data.rows[0].elements[0];
      } else {
        throw new Error("Unable to fetch distance and time information");
      }

    } catch (error) {
      console.log("Error:", error.message);
      throw error;
    }
  }

  module.exports.getSuggestions = async (input) => {
    if(!input){
      throw new Error("address is required");
    } 

    const apiKey = process.env.maps_api_key;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try{
      const response = await axios.get(url);
      if(response.data.status === "OK"){
        return response.data.predictions;
      } else {
        throw new Error("Unable to fetch suggestions");
      }

    }catch(error){
      console.log("Error:", error.message);
      throw error;
    }
  }