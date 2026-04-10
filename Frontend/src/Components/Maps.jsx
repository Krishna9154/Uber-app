import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, ZoomControl  } from "react-leaflet";


const Maps = () => {
  return (
    <div className='h-full w-full'>

      <MapContainer
        center={[26.3849794, 77.8612721]} // Morena
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
      </MapContainer>
    </div>
  );
}

export default Maps