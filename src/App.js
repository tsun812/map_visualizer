import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar";
import LatLonData from "./latLonData";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Map from "./map";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <Map />
    </div>
  );
}

export default App;
