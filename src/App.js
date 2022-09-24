import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import useAppState from "./useAppState";
import Map from "./map";
import React, { useState } from "react";
import DistanceCalculator from "./DistanceCalculator";

function App() {
  const { state, setLatLon, setSource, setDestination } = useAppState();
  const [locList, setLocList] = useState(null);
  const [selectList, setSelectList] = useState([]);
  console.log(state.lat);
  return (
    <div className="App">
      <DistanceCalculator
        selectList={selectList}
        setSelectList={setSelectList}
        setSource={setSource}
        setDestination={setDestination}
      />
      <SearchBar passChildData={setLocList} locList={locList} setSelectList={setSelectList} selectList={selectList}/>
      <Map
        lat={state.lat}
        long={state.long}
        source={state.source}
        destination={state.destination}
      />
    </div>
  );
}

export default App;
