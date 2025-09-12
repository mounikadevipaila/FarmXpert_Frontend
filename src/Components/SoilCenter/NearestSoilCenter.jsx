
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./NearestSoilCenter.css";
import soilCenters from "./soilCenter";

const getDistance = (lat1, lng1, lat2, lng2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const NearestSoilCenter = () => {
  const [position, setPosition] = useState(null);
  const [nearest, setNearest] = useState(null);
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState("");

  const findNearest = (coords) => {
    setPosition(coords);

    let minDist = Infinity;
    let closest = null;

    soilCenters.forEach((center) => {
      const dist = getDistance(coords.lat, coords.lng, center.lat, center.lng);
      if (dist < minDist) {
        minDist = dist;
        closest = center;
      }
    });

    if (closest) {
      setNearest(closest);
      setDistance(minDist.toFixed(2));
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        console.log("📍 Detected coordinates:", coords);

        // Calculate the distance from Peddapuram manually
        const peddapuram = { lat: 17.0788, lng: 82.1392 };
        const approxDist = getDistance(coords.lat, coords.lng, peddapuram.lat, peddapuram.lng);

        if (approxDist > 100) {
          // Detected location is too far (likely inaccurate)
          console.warn("⚠ GPS location is too far from Peddapuram, overriding manually.");
          findNearest(peddapuram);
        } else {
          findNearest(coords);
        }
      },
      (err) => {
        console.error("❌ GPS failed, defaulting to Peddapuram:", err.message);
        findNearest({ lat: 17.0788, lng: 82.1392 });
        setError("Location detection failed. Showing nearest from Peddapuram.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  }, []);

  return (
    <div className="soil-center-container">
      <h2>📍 Nearest Soil Testing Center</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {position && (
        <MapContainer center={position} zoom={11} className="leaflet-map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>📌 You are here</Popup>
          </Marker>
          {nearest && (
            <Marker position={[nearest.lat, nearest.lng]}>
              <Popup>🧪 {nearest.name}</Popup>
            </Marker>
          )}
        </MapContainer>
      )}

      {nearest && (
        <div className="soil-center-info">
          <h3>🧪 {nearest.name}</h3>
          <p>{nearest.address}</p>
          <p>📏 Distance: {distance} km</p>
        </div>
      )}
    </div>
  );
};

export default NearestSoilCenter;
