import { useState } from "react";

export default function CafeLocation() {
  // 👉 Replace with your cafe's real coordinates
  const CAFE_LAT = 28.6139;
  const CAFE_LNG = 77.209;

  const [distance, setDistance] = useState(null);
  const [status, setStatus] = useState("");

  // Haversine formula (real-world distance)
  const getDistanceInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;

    return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(2);
  };

  const handleDistanceCheck = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation not supported");
      return;
    }

    setStatus("Fetching your location...");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        const km = getDistanceInKm(userLat, userLng, CAFE_LAT, CAFE_LNG);

        setDistance(km);
        setStatus("");
      },
      () => {
        setStatus("Location permission denied");
      }
    );
  };

  return (
    <div style={{ padding: 24, maxWidth: 400 }}>
      {/* MAIN BUTTON */}
      <a
        href="https://www.google.com/maps"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: "#ea580c",
          color: "white",
          padding: "12px 20px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        📍 Get Directions
      </a>

      {/* SUB BUTTON */}
      <div style={{ marginTop: 12 }}>
        <button
          onClick={handleDistanceCheck}
          style={{
            background: "none",
            border: "none",
            color: "#ea580c",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          How far am I from this cafe?
        </button>
      </div>

      {/* RESULT */}
      {distance && (
        <p style={{ marginTop: 10 }}>
          You are <strong>{distance} km</strong> away from the cafe
        </p>
      )}

      {status && <p style={{ marginTop: 10, color: "gray" }}>{status}</p>}
    </div>
  );
}
