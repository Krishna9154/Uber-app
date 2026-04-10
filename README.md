   const geoFrom = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(from)}&format=json`,
        {
            headers: {
                'User-Agent': 'Krishna-Uber-App/1.0 (krishna@email.com)', // IMPORTANT
                'Accept-Language': 'en'
            },
            timeout: 5000
        }
    ).catch(err => {
        console.log("Error in API:", err.message);
        return { data: [] };
    });


    .data.routes[0].geometry