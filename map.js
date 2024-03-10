import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ profile }) => {
  const { address, name } = profile;
  const [position, setPosition] = useState([0, 0]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const addressRegex = /^[a-zA-Z0-9\s,]+$/;
        if (!address.match(addressRegex)) {
          throw new Error('Invalid address format');
        }

       
        const response = await fetch(`https://api.geocoding-service.com?address=${encodeURIComponent(address)}`);
        const data = await response.json();

        if (data.error || !data.coordinates) {
          throw new Error('Failed to retrieve coordinates');
        }

        setPosition(data.coordinates);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCoordinates();
  }, [address]);

  if (error) {
    return <div className="map-container">Error: {error}</div>;
  }

  return (
    <div className="map-container">
      <h2>Map</h2>
      <MapContainer center={position} zoom={13} style={{ height: '300px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{name}'s address: {address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
