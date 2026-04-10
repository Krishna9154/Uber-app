const axios = require('axios');

module.exports.coordinatesTracker = async ({ from, to }) => {

    try {
        const geoFrom = await axios.get(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(from)}&format=json`,
            {
                headers: {
                    'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
                    'Accept-Language': 'en'
                },
                timeout: 5000
            })
        const geoTo = await axios.get(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(to)}&format=json`,
            {
                headers: {
                    'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
                    'Accept-Language': 'en'
                },
                timeout: 5000
            })


        if (geoFrom.data.length && geoTo.data.length) {
            const fromLat = parseFloat(geoFrom.data[0].lat);
            const fromLng = parseFloat(geoFrom.data[0].lon);

            const toLat = parseFloat(geoTo.data[0].lat);
            const toLng = parseFloat(geoTo.data[0].lon);

            //   console.log(fromLat,fromLng,toLat,toLng);

            // const routeRes = await axios.get(
            //     `https://router.project-osrm.org/route/v1/driving/${encodeURIComponent(fromLng)},${encodeURIComponent(fromLat)};${encodeURIComponent(toLng)},${encodeURIComponent(toLat)}?overview=full&geometries=geojson`
            // );

            //   console.log(routeRes.data.routes[0].geometry);
            const mapData = {
                "fromLat ": fromLat,
                "fromLng ": fromLng,
                "toLat ": toLat,
                "toLng ": toLng,
                // "geometry": routeRes.data.routes[0]
            }
            return mapData;
        }



        
    } catch (err) {

        console.log("Error in API:", err.message);
        return { data: [] };

    }

    //  const geoFrom = await axios.get(
    //       `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(from)}&format=json`,
    //       {
    //           headers: {
    //               'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
    //               'Accept-Language': 'en'
    //           },
    //           timeout: 5000
    //       }
    //   ).catch(err => {
    //       console.log("Error in API:", err.message);
    //       return { data: [] };
    //   });

    //   return geoFrom.data;
}