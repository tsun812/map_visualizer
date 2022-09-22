import React, { useState } from "react";

export default function LatLonData() {
  // Declare a new state variable, which we'll call "count"
  const [state, setState] = useState({ lat: 0, lon: 0 });

  const successCallback = (position) => {
    console.log(position.coords.latitude);
    setState((prev) => ({
      ...prev,
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    }));
  };

  const errorCallback = (error) => {
    console.log(error);
  };
  console.log(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return { state, setState };
}
