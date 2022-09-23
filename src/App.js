import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import LatLonData from "./latLonData";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Map from "./map";
import React, { useState } from "react";
import LocationList from "./LocationList";
import DistanceCalculator from "./DistanceCalculator";
function App() {

  const [locList, setLocList] = useState(null);
  const [selectList, setSelectList] = useState([]);
  return (
    <div className="App">
      <DistanceCalculator selectList ={selectList}/>
      <SearchBar passChildData={setLocList}/>
      <LocationList locList={locList} setSelectList={setSelectList} selectList={selectList}/>
      <Map />
    </div>
  );
}

export default App;
