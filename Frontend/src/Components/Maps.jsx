import React from 'react'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, ZoomControl, Polyline, Marker, Popup } from "react-leaflet";


const Maps = (props) => {

  const redIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const pickup =[26.3849794, 77.8612721]


  // const pickup = [
  //   props.ridedata?.coOrdinates?.Pickup?.lat ,
  //   props.ridedata?.coOrdinates?.Pickup?.lng
  // ]
  // const destination = [
  //   props.ridedata?.coOrdinates?.Destination?.lat,
  //   props.ridedata?.coOrdinates?.Destination?.lng
  // ];

  const routeCoordinates = props.ridedata?.geometry?.coordinates?.map(([lng, lat]) => [lat, lng]) || []

  return (
    <div className='h-full w-full'>

      <MapContainer
        center={pickup} // Morena
        zoom={10}
        zoomControl={false}


        scrollWheelZoom={true}
        zoomAnimation={true}
        zoomAnimationThreshold={4}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="topright" />

        {/* <Marker position={pickup} icon={redIcon}>
          <Popup>Pickup</Popup>
        </Marker>

       
        <Marker position={destination} icon={redIcon}>
          <Popup>Destination</Popup>
        </Marker> */}

        {routeCoordinates.length > 0 && (
          <Polyline positions={routeCoordinates} />
        )}
      </MapContainer>
    </div>
  );
}

export default React.memo(Maps)