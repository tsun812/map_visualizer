import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import useAppState from "./useAppState";
import Map from "./map";
import { MapContainer } from "react-leaflet";
function App() {
  const { state, setLatLon } = useAppState();
  console.log(state.lat);
  return (
    <div className="App">
      <SearchBar />
      {/* <MapContainer /> */}
      <Map lat={state.lat} long={state.long} />
    </div>
  );
}

export default App;
