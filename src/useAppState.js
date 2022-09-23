import React, { useState, useEffect } from "react";

export default function useAppState() {
  const [state, setState] = useState({
    lat: 0,
    long: 0,
    source: null,
    destination: null,
  });
  const setLatLon = (lat, long) => {
    setState((prev) => ({
      ...prev,
      lat: lat,
      long: long,
    }));
  };

  const setSource = (lat, long) => {
    setState((prev) => ({
      ...prev,
      source: [lat, long],
    }));
  };
  const setDestination = (lat, long) => {
    setState((prev) => ({
      ...prev,
      destination: [lat, long],
    }));
  };
  const successCallback = (position) => {
    setLatLon(position.coords.latitude, position.coords.longitude);
  };

  const errorCallback = (error) => {
    console.log(error);
  };
  console.log(navigator.geolocation);
  useEffect(() => {
    console.log("hello");
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
  return { state, setLatLon, setSource, setDestination };
}
