import React, { useState } from "react";

export default function useAppState() {
  const [state, setState] = useState({ lat: 0, lon: 0 });
  const setLatLon = (lat, lon) => {
    setState((prev) => ({
      ...prev,
      lat: lat,
      lon: lon,
    }));
  };

  return { state, setLatLon };
}
