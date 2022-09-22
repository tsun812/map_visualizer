import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import LatLonData from "./latLonData";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Map from "./map";
import { state, setLatLon } from "./useAppState";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="Map">
        <Map />
      </div>
    </div>
  );
}

export default App;
