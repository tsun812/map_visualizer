import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import useAppState from "./useAppState";
import Map from "./map";
import React, { useState } from "react";
import LocationList from "./LocationList";
import DistanceCalculator from "./DistanceCalculator";

function App() {
  const { state, setLatLon } = useAppState();
  const [locList, setLocList] = useState(null);
  const [selectList, setSelectList] = useState([]);
  console.log(state.lat);
  return (
    <div className="App">
      <SearchBar />
      <SearchBar passChildData={setLocList}/>
      <LocationList locList={locList} setSelectList={setSelectList} selectList={selectList}/>
      <Map lat={state.lat} long={state.long} />
    </div>
  );
}

export default App;
